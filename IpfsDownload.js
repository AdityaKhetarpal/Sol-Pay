import React  from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className="download-component">
          <a className="download-button" href={"https://cloudflare-ipfs.com/ipfs/Qma1FmHULD4Wz7gaDFNxKziGBxmkkjQmpMu6bbFBJxmLRW/Blender.png"} download={filename}>Download</a>
          <a className="download-button" href={"https://cloudflare-ipfs.com/ipfs/Qma1FmHULD4Wz7gaDFNxKziGBxmkkjQmpMu6bbFBJxmLRW/Abstimmung.png"} download={filename}>Download</a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;
