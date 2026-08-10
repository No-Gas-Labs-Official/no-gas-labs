import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface ScreenshotOptions {
  fileName: string;
  quality?: number;
  scale?: number;
}

export const captureScreenshot = async (
  elementId: string,
  options: ScreenshotOptions
): Promise<Blob | null> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const canvas = await html2canvas(element, {
      scale: options.scale || 2,
      quality: options.quality || 0.95,
      backgroundColor: '#ffffff',
      logging: false,
    });

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => resolve(blob),
        'image/png',
        options.quality || 0.95
      );
    });
  } catch (error) {
    console.error('Screenshot capture error:', error);
    return null;
  }
};

export const downloadScreenshot = async (
  elementId: string,
  fileName: string
) => {
  const blob = await captureScreenshot(elementId, {
    fileName,
    scale: 2,
  });

  if (blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

export const exportToPDF = async (
  elementId: string,
  fileName: string,
  metadata?: { title?: string; author?: string }
) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    if (metadata?.title) {
      pdf.setProperties({
        title: metadata.title,
        author: metadata.author || 'No-Gas-Labs Repo Review',
      });
    }

    pdf.save(`${fileName}-${Date.now()}.pdf`);
  } catch (error) {
    console.error('PDF export error:', error);
    throw error;
  }
};
