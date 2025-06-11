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

    async function handleUpload()
    {
        if(!file) {
            alert('failed upload: no file to upload');
            return;
        }

        const fileName = encodeURIComponent(file.name);
        const fileType = encodeURIComponent(file.type);

        try{
            const res = await fetch(`https://pw4w2ow7rd.execute-api.us-east-1.amazonaws.com/presign?fileName=${fileName}&fileType=${fileType}`);
            
            if(!res.ok)
            {
                throw new Error(`Failed to get presigned URL. Status ${res.status}`)
            }

            const {uploadUrl, key} = await res.json();
    
            if (!uploadUrl) {
               throw new Error('Presigned URL missing from response');
            }
            console.log('Uploading to:', uploadUrl);

            const putRes = await fetch(uploadUrl, {
                method: 'PUT',
                headers: {'Content-Type' : file.type},
                body: file,
            });

            if (!putRes.ok) {
                throw new Error(`S3 upload failed. Status: ${putRes.status}`);
            }
            alert("UPLOAD SUCCESSFUL")
        }
        catch (err) {
            alert(`[Upload Error] ${err}`);
            console.error('[Upload Error]', err);
        }

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
                // disabled={!file}
                style={{marginTop: '1rem'}}
            >
                Uppie
            </button>
        </div>
    );
} export default UploadForm