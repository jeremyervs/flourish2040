import { jsPDF } from "jspdf";

interface SufferingLevel {
  type: string;
  level: "low" | "medium" | "high";
}

interface ScenarioData {
  title: string;
  subtitle: string;
  story: string[];
  howMostLive: string[];
  whoThrives?: string[];
  systemsLookLike?: string[];
  sufferingLevels: SufferingLevel[];
}

export const generateScenarioPDF = (
  baselineData: ScenarioData,
  transformationData: ScenarioData
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper to add wrapped text
  const addText = (text: string, fontSize: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, contentWidth);
    
    lines.forEach((line: string) => {
      checkNewPage(fontSize * 0.5);
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
  };

  // Title Page
  doc.setFillColor(5, 8, 22);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  
  doc.setTextColor(245, 245, 247);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  const titleLines = doc.splitTextToSize("The Future of Suffering: Redefining Well-being in a Post-AI World", contentWidth);
  let titleY = pageHeight / 2 - 20;
  titleLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, titleY, { align: "center" });
    titleY += 10;
  });

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Two Scenarios for 2040", pageWidth / 2, titleY + 10, { align: "center" });
  
  doc.setFontSize(10);
  doc.text("A Foresight Brief", pageWidth / 2, titleY + 20, { align: "center" });

  // Add new page for content
  doc.addPage();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  doc.setTextColor(0, 0, 0);
  yPosition = margin;

  // Introduction
  addText("Overview", 16, true);
  yPosition += 5;
  addText(
    "This brief presents two alternative futures for 2040, exploring how AI integration might reshape human suffering and well-being. Both scenarios are driven by the same six forces but diverge based on the choices we make today.",
    11
  );
  yPosition += 10;

  // Baseline Scenario
  checkNewPage(30);
  doc.setDrawColor(255, 92, 112);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;

  addText(baselineData.title, 16, true);
  yPosition += 3;
  doc.setFontSize(10);
  doc.setTextColor(255, 92, 112);
  doc.text(baselineData.subtitle, margin, yPosition);
  doc.setTextColor(0, 0, 0);
  yPosition += 10;

  addText("The Story", 12, true);
  yPosition += 3;
  baselineData.story.forEach((paragraph) => {
    addText(paragraph, 10);
    yPosition += 3;
  });

  yPosition += 5;
  addText("How Most People Live", 12, true);
  yPosition += 3;
  baselineData.howMostLive.forEach((item) => {
    checkNewPage(15);
    doc.text("•", margin, yPosition);
    const itemLines = doc.splitTextToSize(item, contentWidth - 10);
    itemLines.forEach((line: string, idx: number) => {
      doc.text(line, margin + 5, yPosition);
      if (idx < itemLines.length - 1) yPosition += 5;
    });
    yPosition += 7;
  });

  if (baselineData.whoThrives) {
    yPosition += 5;
    addText("Who Thrives", 12, true);
    yPosition += 3;
    baselineData.whoThrives.forEach((item) => {
      checkNewPage(15);
      doc.text("•", margin, yPosition);
      const itemLines = doc.splitTextToSize(item, contentWidth - 10);
      itemLines.forEach((line: string, idx: number) => {
        doc.text(line, margin + 5, yPosition);
        if (idx < itemLines.length - 1) yPosition += 5;
      });
      yPosition += 7;
    });
  }

  yPosition += 5;
  addText("Suffering Profile", 12, true);
  yPosition += 3;
  baselineData.sufferingLevels.forEach((item) => {
    checkNewPage(10);
    doc.setFontSize(10);
    doc.text(`${item.type}: ${item.level.toUpperCase()}`, margin + 5, yPosition);
    yPosition += 6;
  });

  // Transformation Scenario
  checkNewPage(40);
  yPosition += 10;
  doc.setDrawColor(59, 232, 176);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 8;

  addText(transformationData.title, 16, true);
  yPosition += 3;
  doc.setFontSize(10);
  doc.setTextColor(59, 232, 176);
  doc.text(transformationData.subtitle, margin, yPosition);
  doc.setTextColor(0, 0, 0);
  yPosition += 10;

  addText("The Story", 12, true);
  yPosition += 3;
  transformationData.story.forEach((paragraph) => {
    addText(paragraph, 10);
    yPosition += 3;
  });

  yPosition += 5;
  addText("How Most People Live", 12, true);
  yPosition += 3;
  transformationData.howMostLive.forEach((item) => {
    checkNewPage(15);
    doc.text("•", margin, yPosition);
    const itemLines = doc.splitTextToSize(item, contentWidth - 10);
    itemLines.forEach((line: string, idx: number) => {
      doc.text(line, margin + 5, yPosition);
      if (idx < itemLines.length - 1) yPosition += 5;
    });
    yPosition += 7;
  });

  if (transformationData.systemsLookLike) {
    yPosition += 5;
    addText("What Systems Look Like", 12, true);
    yPosition += 3;
    transformationData.systemsLookLike.forEach((item) => {
      checkNewPage(15);
      doc.text("•", margin, yPosition);
      const itemLines = doc.splitTextToSize(item, contentWidth - 10);
      itemLines.forEach((line: string, idx: number) => {
        doc.text(line, margin + 5, yPosition);
        if (idx < itemLines.length - 1) yPosition += 5;
      });
      yPosition += 7;
    });
  }

  yPosition += 5;
  addText("Suffering Profile", 12, true);
  yPosition += 3;
  transformationData.sufferingLevels.forEach((item) => {
    checkNewPage(10);
    doc.setFontSize(10);
    doc.text(`${item.type}: ${item.level.toUpperCase()}`, margin + 5, yPosition);
    yPosition += 6;
  });

  // Footer on last page
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text(
    "Generated from: The Future of Suffering Microsite",
    pageWidth / 2,
    pageHeight - 10,
    { align: "center" }
  );

  // Save the PDF
  doc.save("Future-of-Suffering-2040-Scenarios.pdf");
};
