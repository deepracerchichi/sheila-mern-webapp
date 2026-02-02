import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import RateLimitedUI from '../components/RateLimitedUI'
import toast from 'react-hot-toast';
import { api } from '../lib/axios';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
  const [isPastratelimit, setIsPastratelimit] =useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes]=useState([]);

  useEffect(()=>{
    setIsLoading(true)
    const fetchNotes = async() => {
      try {
        const res = await api.get("/notes");
        
        console.log(res.data)
        setNotes(res.data);
        setIsPastratelimit(false)
      } catch (error) {
        console.log("ERROR IN FETCHING/ DISPLAYING THE DATA", error)
        if(error.response?.status === 429) {
          setIsPastratelimit(true);
        } else {
          toast.error("error fetching notes")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotes();
  }, [])


  return (
    <div className='min-h-screen'>
      <NavBar />
      
      {isPastratelimit && <RateLimitedUI />}
      <div className='max-w-7xl p-4 mt-6 mx-auto'>
        {isLoading && <div className='text-center text-primary py-10'>Loading...</div>}

        {notes.length === 0 && !isPastratelimit && <NotesNotFound />}

        {notes.length > 0 && !isPastratelimit && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {notes.map((note) => (
              <div key={note._id}>
                <NoteCard note={note} setNotes={setNotes}/>
              </div>
            ))}

          </div>
        )}

        

      </div>

      
      
    </div>
  )
}

export default HomePage