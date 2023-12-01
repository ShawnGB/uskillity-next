import dynamic from 'next/dynamic';

const dynamicImport = (path) => dynamic(() => import(path), { ssr: false });

export default dynamicImport;
