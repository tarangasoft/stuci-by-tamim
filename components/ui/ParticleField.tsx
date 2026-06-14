export function ParticleField({ density = 64 }: { density?: number }) {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: density }).map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index % 17) * 0.23}s`,
            animationDuration: `${5 + (index % 11) * 0.7}s`,
            opacity: 0.25 + (index % 5) * 0.12
          }}
        />
      ))}
    </div>
  );
}
