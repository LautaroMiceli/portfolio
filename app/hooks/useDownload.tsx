export default function useDownload() {
    const handleDownload = () => {
        // Ruta al archivo en la carpeta public
        const fileUrl = '/CV-LautaroMiceli.pdf'; // Cambia el nombre del archivo por el que desees

        // Crea un enlace temporal para la descarga
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'CV - LautaroMiceli.pdf'; // Nombre del archivo cuando se descargue
        link.click(); // Dispara la descarga
    };

    return {
        handleDownload
    }
}