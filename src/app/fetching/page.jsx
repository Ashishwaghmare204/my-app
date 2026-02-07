import React from "react";

const FetchingExample = async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json(),
  );
  const data = await res;
  return (
    <div className="p-5 w-2xl mx-auto">
      <h1>FetchingExample</h1>
      <div className="overflow-y-auto h-200 px-2.5 ">
        <table className="w-full px-20 border-2 m-2 border-gray-500 shadow-amber-50">
          <tbody className="p-2">
            <tr>
              <th>id </th>
              <th>title </th>
              <th>body</th>
            </tr>
            {data.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchingExample;
