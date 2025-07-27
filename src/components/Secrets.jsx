import React from 'react'

import PersonIcon from '@mui/icons-material/Person';

const Secrets = ({handleSecret, searchInput, category, allSecrets}) => {

    const filteredSecrets = allSecrets.filter((secret) => {
        const inputMatch = searchInput === "" || secret.title.toLowerCase().includes(searchInput.toLowerCase());
        const categoryMatch = category === "All" || secret.category === category;
        return inputMatch && categoryMatch;
    });

  return (

    <div>
        {filteredSecrets.length === 0 ? (
            <div className='flex justify-center'>
                <div role="alert" className="alert alert-error alert-soft">
                    <span>No secrets found! Please try again.</span>
                </div>
            </div>
        ) : 
        (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5'>
            {filteredSecrets.map((secret, index)=>(
                <div className="card group relative bg-slate-900 border border-[#2f223c] card-md shadow-lg cursor-pointer transition-all hover:scale-105" key={index} onClick={()=>handleSecret(secret)}>
                    <div className="card-body">
                        <div className="badge absolute top-5 right-5 text-purple-500 font-medium border border-purple-500 bg-[#432853]">
                            {secret.category}
                        </div>

                        <h2 className="card-title max-w-40 sm:w-50 group-hover:text-purple-500 transition-colors duration-500">{secret.title}</h2>
                        <p className='text-gray-500 flex items-center gap-1'> <PersonIcon fontSize='small'/>  {secret.username}</p>
                        <p className='text-gray-500'>{secret.content.substring(0,90)}...</p>
                    </div>
                </div>
            ))}
        </div>
        )}
    </div>

        
  )
}

export default Secrets