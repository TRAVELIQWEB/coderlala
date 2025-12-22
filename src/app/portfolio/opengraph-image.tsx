import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Portfolio - CoderLala Technologies';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: '64px', fontWeight: 'bold' }}>
            Our Portfolio
          </h1>
          <p style={{ margin: '20px 0 0 0', fontSize: '32px', opacity: 0.9 }}>
            Enterprise & SaaS Projects
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}