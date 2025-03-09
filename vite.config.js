import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    // server: {
    //     watch: {
    //         usePolling: true, // Bật polling để theo dõi thay đổi file
    //     },
    //     host: true, // Cho phép truy cập từ các thiết bị khác
    //     port: 3000, // Có thể đổi sang port khác nếu cần
    // },
});
