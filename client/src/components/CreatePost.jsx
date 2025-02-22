import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
    return (
        <div className="p-3 max-w-3xl min-h-screen mx-auto overflow-hidden">
            <h1 className="text-center text-2xl font-semibold">Create a Post</h1>
            <form className="flex flex-col gap-4  p-3 max-h-screen ">
                <div className="flex flex-col gap-4 sm:flex-row justify-between mt-4">
                    <input 
                        type="text" 
                        placeholder="Title " 
                        required 
                        id="title" 
                        className="p-2 rounded bg-transparent border border-[#6246EA] flex-1" 
                    />
                    <select 
                        className="bg-transparent border border-[#6246EA] rounded-lg p-2 text-[#6246EA]" 
                        name="type" 
                        id="type"
                    >
                        <option value="none">Select a Category</option>
                        <option value="javascript">Javascript</option>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                        <option value="express">Express</option>
                    </select>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-start justify-between border-4 border-[#6246EA] border-dotted p-3 w-full">
                    <input type="file" accept="image/*" className="flex-grow" />
                    <span className="text-[#6246EA] flex-shrink-0 mt-2 sm:mt-0">Upload a Cover Image</span>
                </div>
                <div className=''>  <ReactQuill 
                    theme="snow" 
                    placeholder="Write something..." 
                    className="mt-4"
                    /></div>
              
                  <button className='bg-[#6246EA] text-center text-white p-2 rounded-md'>Publish</button>
            </form>
        </div>
    );
}

export default CreatePost;