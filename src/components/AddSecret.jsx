import React, { useRef, useState } from 'react'

const AddSecret = ({setAllSecrets}) => {
    const [username, setUsername] = useState("");
    const [category, setCategory] = useState('All');
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const modalRef = useRef(null);

    function submitSecret(){
        if(username==="" || title==="" || content === ""){
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }else {
            setAllSecrets(prevSecrets=>{
                return [{username, category, title, content}, ...prevSecrets];
            });
            clearForm();
            modalRef.current.close();
        }
    }

    function clearForm(){
        setUsername("");
        setCategory("All");
        setTitle("");
        setContent("");
    }

  return (
    <div>
        <dialog ref={modalRef} id="my_modal_2" className="modal modal-middle">

            <div className="modal-box">
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-wrap gap-3 max-md:justify-center justify-between items-center'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Username *</legend>
                            <input name='username' value={username} type="text" className="input input-secondary" placeholder="Type here" onChange={e=>setUsername(e.target.value)}/>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category *</legend>
                            <label className="select select-secondary">
                                <span className="label">Categories</span>
                                <select value={category} onChange={e=>setCategory(e.target.value)} name='category'>
                                    <option>All</option>
                                    <option>Personal</option>
                                    <option>Work</option>
                                    <option>Love</option>
                                    <option>Family</option>
                                    <option>Dreams</option>
                                    <option>Fears</option>
                                    <option>Others</option>
                                </select>
                            </label>
                        </fieldset>
                    </div>

                    <fieldset className="fieldset">
                            <legend className="fieldset-legend">Secret Title *</legend>
                            <input type="text" name='title' value={title} onChange={e=>setTitle(e.target.value)} className="input input-secondary w-full" placeholder="Type here" />
                    </fieldset>

                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Full Secret *</legend>
                            <textarea id='content' name='content' value={content} onChange={e=>setContent(e.target.value)} className="textarea textarea-secondary h-24 w-full" placeholder="Bio"></textarea>
                         
                        </fieldset>
                    </div>
                </div>

                 <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={clearForm}>✕</button>
                </form>

                <div className='modal-action'>
                    <button className='btn btn-secondary font-bold' onClick={()=>submitSecret()}>Add Secret</button>
                </div>
            </div>

            {showAlert && 
            <div className="toast toast-center">
                <div className="alert alert-error">
                    <span>Please fill in all required inputs.</span>
                </div>
            </div>
            }

        </dialog>

    </div>
  )
}

export default AddSecret