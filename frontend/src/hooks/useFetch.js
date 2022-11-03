// import { useEffect, useState } from "react"
// import axios from 'axios';

// const useFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);


//     // const [customer, setCustomer] = useState([]);

//     // useEffect(() => {
//     //     const getcustomer = async () => {
//     //         const res = await fetch("http://localhost/customer");
//     //         console.log(res);
//     //         const getdata = await res.send();
//     //         setCustomer(getdata);
//     //         // console.log(getdata);
//     //     }
//     //     getcustomer();
//     // }, []);


//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);

//             try {
//                 //Making api request
//                 const res = await axios.get(url);
//                 // console.log('data', res);
//                 setData(res.data);
//             } catch (err) {
//                 console.error(err)
//                 setError(err);
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, [url]);


//     const reFetch = async () => {
//         setLoading(true);

//         try {
//             const res = await axios.get(url);
//             setData(res.data);
//         } catch (err) {
//             console.error(err)
//             setError(err);
//         }
//         setLoading(false);
//     };

//     return { data, loading, error, reFetch }
// };

// export default useFetch;