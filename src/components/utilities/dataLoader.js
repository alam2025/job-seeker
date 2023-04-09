const loadData=async()=>{
      const res = await fetch('job-categories.json')
      const data= await res.json();
      return data;
}

export {
      loadData
}