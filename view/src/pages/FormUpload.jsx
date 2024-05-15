import React, { useState } from 'react';

function FormUpload() {
    const [selectedFile, setSelectedFile] = useState();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        fetch("http://localhost:3000/upload",{
            method: 'POST',
            body: formData
        }).then((result ) => { console.log(result);  })
        .catch((error) => { console.log(error);});
            
    };

    return (
        <>
        <div className='container-fluid mt-3'>
            <label htmlFor='file1' className='form-label'>Imagem</label>
            <input type="file" onChange={handleFileChange} id="file1" className='form-control'/>
        </div>
        <div className="mb-4">
            <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
        </div>
        </>
    );
}

export default FormUpload;
