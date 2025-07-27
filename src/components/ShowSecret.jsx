import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ShowSecret = ({secret, isOpen, modalClose}) => {

    const [isCopied, setCopied] = useState(false);

    function handleCopied(){
        navigator.clipboard.writeText(secret.content);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    

  return (
        <dialog id="show_modal" className={`modal ${isOpen && 'modal-open'}`}>
            <div className="modal-box bg-slate-900 border border-[#2f223c]">
               
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={modalClose}>✕</button>
                
                <h3 className="font-bold text-xl text-purple-500 mb-5">{secret.title}</h3>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-2 p-4 border border-purple-500 rounded-2xl'>
                        <PersonIcon fontSize='large' className='text-purple-500'/>
                        <p className='text-md font-bold'>{secret.username}</p>
                        <div className="badge text-purple-500 font-medium border border-purple-500 bg-[#432853]">
                            {secret.category}
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <LockOutlineIcon/>
                            <p>Secret Content</p>
                        </div>
                        <button className='flex items-center text-xs gap-1 p-2 border border-purple-500 bg-slate-950 rounded-lg font-bold cursor-pointer hover:bg-purple-700' onClick={handleCopied}><ContentCopyIcon fontSize='extra-small'/>Copy</button>
                    </div>

                    <div className='border border-purple-500 rounded-2xl p-4'>
                        <p>{secret.content}</p>
                    </div>

                </div>
            </div>

            {isCopied && 
            <div className="toast toast-center">
                <div className="alert bg-purple-500">
                    <span className='font-bold'>Copied to Clipboard</span>
                    
                </div>
            </div>}
        </dialog>
  )
}

export default ShowSecret