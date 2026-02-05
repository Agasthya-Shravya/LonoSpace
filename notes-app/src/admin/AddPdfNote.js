import { useState } from "react";

export default function AddPdfNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

     if (!pdfFile) {
    alert("Please upload a PDF");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("coverImageUrl", coverImageUrl);
  formData.append("pdf", pdfFile);
  try {
    const res = await fetch(
      "http://localhost:5000/api/admin/notes/add-pdf",
      {
        method: "POST",
        body: formData
      }
    );

    if (!res.ok) {
      throw new Error("Failed to save note");
    }

    alert("PDF note added successfully");
    window.location.href = "/admin/notes";
  } catch (err) {
    console.error(err);
    alert("Error saving note");
  }
};

  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: "#f8f0e3", padding: "30px" }}
    >
      <div className="container">
        <h3 className="mb-4">Add PDF Note</h3>

        <form
          className="p-4 rounded"
          style={{ backgroundColor: "#fff" }}
          onSubmit={handleSubmit}
        >
          {/* TITLE */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* COVER IMAGE URL */}
          <div className="mb-3">
            <label className="form-label">Cover Image URL</label>
            <input
              type="text"
              className="form-control"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* IMAGE PREVIEW */}
          {coverImageUrl && (
            <div className="mb-3">
              <img
                src={coverImageUrl}
                alt="Preview"
                style={{
                  width: "200px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}

          {/* PDF UPLOAD */}
          <div className="mb-4">
            <label className="form-label">Upload PDF</label>
            <input
              type="file"
              className="form-control"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              required
            />
          </div>

          {/* ACTIONS */}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Save Note
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
