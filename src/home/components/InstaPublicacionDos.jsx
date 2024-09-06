import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/C_aqdx_xGc4/?utm_source=ig_embed&utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
        maxWidth: '540px',
        minWidth: '272px',
        padding: 0,
        width: '99.375%'
      }}
    >
      <div style={{ padding: '16px' }}>
        <a
          href="https://www.instagram.com/p/C_aqdx_xGc4/?utm_source=ig_embed&utm_campaign=loading"
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                flexGrow: 0,
                height: '40px',
                marginRight: '14px',
                width: '40px',
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  marginBottom: '6px',
                  width: '100px',
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  width: '60px',
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          <div
            style={{
              display: 'block',
              height: '50px',
              margin: '0 auto 12px',
              width: '50px',
            }}
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* SVG content */}
            </svg>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div
              style={{
                color: '#3897f0',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                fontWeight: '550',
                lineHeight: '18px',
              }}
            >
              Ver esta publicación en Instagram
            </div>
          </div>
          <div style={{ padding: '12.5% 0' }}></div>
        </a>
        <p
          style={{
            color: '#c9c8cd',
            fontFamily: 'Arial,sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: 0,
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <a
            href="https://www.instagram.com/p/C_aqdx_xGc4/?utm_source=ig_embed&utm_campaign=loading"
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '17px',
              textDecoration: 'none',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Una publicación compartida de EcoSaverStrategies | Energía Eficiente |
            Innovación | Tecnología (@ecosaverstrategies)
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
