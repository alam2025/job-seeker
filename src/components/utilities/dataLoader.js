// categories load 
const categoryLoad=async()=>{
      const res = await fetch('job-categories.json')
      const data= await res.json();
      return data;
}

// jobs load 
const jobsLoader=async()=>{
      const res = await fetch('jobs.json')
      const data= await res.json();
      return data;
}

export {
      categoryLoad,
      jobsLoader
}