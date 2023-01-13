import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleReceipes = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [step, setStep] = useState([]);
  useEffect(() => {
    const Singledata = async () => {
      let res = await fetch(`http://localhost:5500/ingredients/${id}`);
      res = await res.json();
      setData(res.ingredient);
    };
    Singledata();
    const stepData = async () => {
      let res = await fetch(`http://localhost:5500/process/${id}`);
      res = await res.json();
      setStep(res.process);
    };
    stepData();
  }, []);
  //localhost:5500/process/63c042c9b1677fac12154164
  http: return (
    <div className="flex sm:flex-row flex-col gap-x-10">
      <Link to="/receipes">
        <button className="bg-fuchsia-500 px-5 py-2 rounded-lg text-lg font-bold">
          Back
        </button>
      </Link>
      {data.map((e) => {
        return (
          <div className="flex sm:flex-row flex-col max-w-screen-lg border-2 justify-center gap-10 mx-auto px-6 py-6 mt-10 rounded-xl shadow-sm shadow-pink-200">
            <div>
              <img src="" alt="image.png" />
            </div>
            <div>
              <h2 className="text-xl font-bold capitalize">
                {e.receipe_id.name}
              </h2>
              <p className="font-semibold">
                Created By{" "}
                <span className="text-pink-700 font-bold capitalize">
                  {e.receipe_id.creator_id.user_id}
                </span>
              </p>
              <p className="capitalize pb-2">{e.receipe_id.desc}</p>
              <div>
                <h2>
                  Ingredients:{" "}
                  <span className="font-bold text-pink-700">
                    {e.items} {e.amount}
                    {e.unit}
                  </span>
                </h2>
              </div>
              <div>
                {step.map((e) => {
                  return <article>{e.step}</article>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
