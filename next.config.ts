import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Permite qualquer caminho dentro de placehold.co
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Adicionando o host do Hero
        port: '',
        pathname: '/**', // Permite qualquer caminho dentro de images.unsplash.com
      },
      // Adicione outros domínios aqui se precisar
    ],
  },
};

export default nextConfig;
