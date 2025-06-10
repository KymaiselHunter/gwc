import { useState } from 'react'; 

function UploadForm()
{
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    function handleChange(e){
        const selectedFile = e.target.files[0];
        
        if(!selectedFile) return;

        if(!selectedFile.type.startsWith('image/'))
        {
            alert('Only image files are allowed.');
            return;
        }

        if(selectedFile.size > 5 * 1024 * 1024)
        {
            alert('File must be less than 5MB.');
            return;
        }

        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
    }

    function handleUpload()
    {
        alert("Upload fronted works");
    }

    return(
        <div style={{padding: '1rem'}}>
            <h2>Upload an Image</h2>
            <input type="file" accept='image/*' onChange={handleChange}/>
            {previewUrl && (
                <div style={{ marginTop: '1rem'}}>
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px'}}/>
                </div>
            )}
            <button
                onClick={handleUpload}
                disabled={!file}
                style={{marginTop: '1rem'}}
            >
                Uppie
            </button>
        </div>
    );
} export default UploadForm