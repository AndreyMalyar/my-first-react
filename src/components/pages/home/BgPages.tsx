import React, { useEffect, useRef } from 'react';

interface MouseState {
    x: number;
    y: number;
    pressed: boolean;
    radius: number;
}

interface ParticleBackgroundProps {
    className?: string;
    style?: React.CSSProperties;
}

class Particle {
    private readonly effect: Effect;
    public readonly radius: number;
    public x: number;
    public y: number;
    private vx: number;
    private vy: number;
    private pushX: number;
    private pushY: number;
    private readonly friction: number;

    constructor(effect: Effect) {
        this.effect = effect;
        this.radius = Math.floor(Math.random() * 10 + 1);
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 1.2 - 0.5;
        this.vy = Math.random() * 1.2 - 0.5;
        this.pushX = 0;
        this.pushY = 0;
        this.friction = 0.95;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    update(): void {
        if (this.effect.mouse.pressed) {
            const dx = this.x - this.effect.mouse.x;
            const dy = this.y - this.effect.mouse.y;
            const distance = Math.hypot(dx, dy);
            const force = this.effect.mouse.radius / distance;
            if (distance < this.effect.mouse.radius) {
                const angle = Math.atan2(dy, dx);
                this.pushX += Math.cos(angle) * force;
                this.pushY += Math.sin(angle) * force;
            }
        }

        this.x += (this.pushX *= this.friction) + this.vx;
        this.y += (this.pushY *= this.friction) + this.vy;

        if (this.x < this.radius) {
            this.x = this.radius;
            this.vx *= -1;
        } else if (this.x > this.effect.width - this.radius) {
            this.x = this.effect.width - this.radius;
            this.vx *= -1;
        }
        if (this.y < this.radius) {
            this.y = this.radius;
            this.vy *= -1;
        } else if (this.y > this.effect.height - this.radius) {
            this.y = this.effect.height - this.radius;
            this.vy *= -1;
        }
    }

    reset(): void {
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
}

class Effect {
    public readonly canvas: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;
    public width: number;
    public height: number;
    public particles: Particle[];
    public numberOfParticles: number;
    public readonly mouse: MouseState;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 0;
        this.start(window.innerWidth);
        this.createParticles();

        this.mouse = {
            x: 0,
            y: 0,
            pressed: false,
            radius: 200
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    private start(width: number): void {
        if (width > 992) {
            this.numberOfParticles = 250;
        } else if (width > 700) {
            this.numberOfParticles = 100;
        } else if (width > 600) {
            this.numberOfParticles = 70;
        } else {
            this.numberOfParticles = 50;
        }
    }

    private createParticles(): void {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
    }

    public handleParticles(context: CanvasRenderingContext2D): void {
        this.connectParticles(context);
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }

    private connectParticles(context: CanvasRenderingContext2D): void {
        const maxDistance = 150;
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a + 1; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance) {
                    const opacity = 1 - (distance / maxDistance);
                    context.save();
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                    context.restore();
                }
            }
        }
    }

    private handleResize(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;

        const gradient = this.context.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'rgb(152, 181, 205)');
        gradient.addColorStop(1, 'rgb(4, 76, 134)');
        this.context.fillStyle = gradient;
        this.context.strokeStyle = 'white';

        this.particles.forEach(particle => particle.reset());
        this.particles.splice(0);
        this.start(width);
        this.createParticles();
    }

    private handleMouseDown(e: MouseEvent): void {
        this.mouse.pressed = true;
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    private handleMouseMove(e: MouseEvent): void {
        if (this.mouse.pressed) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        }
    }

    private handleMouseUp(e: MouseEvent): void {
        this.mouse.pressed = false;
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    public destroy(): void {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = "header__fon_bg", style = {} }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const effectRef = useRef<Effect | null>(null);
    const animationIdRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Устанавливаем размеры canvas
        const resizeCanvas = (): void => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        // Создаем градиент
        const createGradient = (): void => {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(0.5, 'rgb(152, 181, 205)');
            gradient.addColorStop(1, 'rgb(4, 76, 134)');
            ctx.fillStyle = gradient;
            ctx.strokeStyle = 'white';
        };

        createGradient();

        // Создаем эффект
        effectRef.current = new Effect(canvas, ctx);

        // Функция анимации
        const animate = (): void => {
            if (!ctx || !effectRef.current) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effectRef.current.handleParticles(ctx);
            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup функция
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (effectRef.current) {
                effectRef.current.destroy();
            }
        };
    }, []);

    const defaultStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'auto',
        ...style
    };

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={defaultStyle}
        />
    );
};

export default ParticleBackground;