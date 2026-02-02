import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router';
import toast from "react-hot-toast";
import { api } from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle]=useState("");
  const [content, setContent]=useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required")
      return;
    }

    setLoading(true);

    try {

      await api.post("/notes", {
        title,
        content
      })

      toast.success("Note created successfully!");

      navigate("/")

    } catch (error) {
      
      console.log("Error creating note", error);

      if (error.response.status === 429) {
        toast.error("Slow down. You're sending too much requests", {
          icon:"😭",
          duration:4000,
        });
      } else {
        toast.error("Failed to create note!")
      }
      

    } finally {
      setLoading(false)
    }
    
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost btn-primary mb-6 rounded-2xl quickbutton'>
            <ArrowLeftIcon className='size-5'/>
            Back to Notes
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl text-primary mb-4 font-mont'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>

                  <label className='label mb-2 text-lg font-mont'>
                    <span className='label-text'>Title</span>
                  </label>

                  <input 
                    type='text'
                    placeholder='Enter title here...'
                    className='font-quick font-medium input input-info rounded-2xl'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                  />

                </div>

                <div className='flex flex-col mb-4'>

                  <label className='label mb-2 text-lg font-mont'>
                    <span className='label-text'> Content</span>
                  </label>

                  <textarea 
                    placeholder='Write your note here...'
                    className='font-quick font-medium textarea textarea-info rounded-2xl h-32'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                   />

                </div>

                <div className='card-actions justify-end'>
                  <button type="submit" className=' quickbutton btn btn-outline btn-primary rounded-2xl' disabled={loading}>
                    {loading? 'Creating...': "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage;