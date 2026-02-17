import { useEffect, useState } from "react"

export default function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, [])
  return(
    <div>Github: {data.followers}</div>
  )
} 