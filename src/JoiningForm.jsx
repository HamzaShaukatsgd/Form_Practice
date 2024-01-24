import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const JoiningForm = () => {
  const [storage,setStorage] =useState([]);
  return (
    <div className="container min-w-[100vw] box-border min-h-[100vh] bg-gray-300 flex flex-col justify-center items-center">
      <div className="form w-[60vw] min-h-[80vh] bg-red-400 pb-6">
        <h1 className="text-3xl text-white text-center mt-2">Joining Form</h1>
        <Formik
          initialValues={{
            Name: {
              FName: "",
              LName: "",
            },
            Fruits: "",
            Gender: "",
            Password: "",
            Date: "",
            TextArea: "",
            hobbies: [],
            cvfile: "",
            fruits_Check: [],
          }}
          onSubmit={(values) => {
            console.log(values);
            setStorage([...storage,values]);
          }}
        >
          {({ values }) => (
            <Form action="" className="pl-4 pr-4">
              <div className="w-[100%]">
                <label htmlFor="FName" className=" w-[50%] text-2xl">
                  First Name :
                  <Field
                    className=""
                    type="text"
                    placeholder="Enter First Name"
                    name="Name.FName"
                    id="FName"
                  />
                </label>
                <label htmlFor="LName" className="text-2xl w-[50%]">
                  Last Name :
                  <Field
                    className=""
                    type="text"
                    placeholder="Enter Last Name"
                    name="Name.LName"
                    id="LName"
                  />
                </label>
              </div>
              <hr className="text-black w-[20rem] mt-2  mb-4 mx-auto" />
              <Field type="date" name="Date" />
              <hr className="text-black w-[20rem] mt-2  mb-4 mx-auto" />
              <label htmlFor="Password" className="text-2xl">
                Password :
                <Field
                  className="w-[100%]"
                  type="Password"
                  placeholder="Enter Password"
                  name="Password"
                  id="Password"
                />
              </label>
              <hr className="text-black w-[20rem] mt-2  mb-4 mx-auto" />
              <label htmlFor="TextArea" className="text-2xl">
                Password :
                <Field
                  className="w-[100%]"
                  as="TextArea"
                  placeholder="Enter TextArea"
                  name="TextArea"
                  id="TextArea"
                />
              </label>
              <hr className="text-black w-[20rem] mt-2  mb-4 mx-auto" />
              <Field
                name="Fruits"
                as="select"
                className="w-[100%] mt-4 text-2xl"
              >
                <option value="Fruits" name="Fruits">
                  Fruits
                </option>
                <option value="Mango">Mango</option>
                <option value="Orange">Orange</option>
                <option value="Banana">Banana</option>
              </Field>
              <hr className="text-black w-[20rem] mt-2 mx-auto mb-4 " />
              <div className="flex flex-col">
                <h1 className="text-2xl">Gender</h1>
                <label htmlFor="" className="ml-2">
                  <Field type="radio" name="Gender" value="male" />
                  Male
                </label>
                <label htmlFor="" className="ml-2">
                  <Field type="radio" name="Gender" value="female" />
                  Female
                </label>
              </div>
              <hr className="text-black w-[20rem] mt-2 mb-4 mx-auto" />{" "}
              <div className="File">
                <label htmlFor="" className="text-2xl">
                  File Management
                  <Field
                    className="w-[100%] text-1xl"
                    type="file"
                    name="cvfile"
                    id=""
                  />
                </label>
              </div>
              <hr className="text-black w-[20rem] mt-2 mb-4 mx-auto" />
              <div className="Checkbox flex flex-col">
                <h1 className="text-2xl">Fruits</h1>
                <label htmlFor="">
                  <Field type="checkbox" name="fruits_Check" value="Mango" id="Mango" />
                  Mango
                </label>
                <label htmlFor="">
                  <Field type="checkbox"   name="fruits_Check" value="Orange" id="Orange" />
                  Orange
                </label>
                <label htmlFor="">
                  <Field type="checkbox"  name="fruits_Check"  value="Water Melon" id="Water Melon" />
                  Water Melon
                </label>
              </div>
              <hr className="text-black w-[20rem] mt-2 mb-4 mx-auto" />
              <FieldArray
                name="hobbies"
                render={(arrayHelpers) => (
                  <div>
                    {values.hobbies && values.hobbies.length > 0 ? (
                      values.hobbies.map((hobbies, index) => (
                        <div key={index}>
                          <Field name={`hobbies.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                        className="mt-2 mb-2 text-2xl bg-white pl-8 pr-8 pt-2 pb-2 rounded-full flex justify-center mx-auto"
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                  </div>
                )}
              />
              <button
                type="submit"
                className=" mt-2 mb-2 text-2xl bg-white pl-8 pr-8 pt-2 pb-2 rounded-full flex justify-center mx-auto"
              >
                Join
              </button>
            </Form>
          )}
        </Formik>
      </div>
    <div>
        <table>
          <thead>
            <th>Full Name</th>
            <th>Date</th>
            <th>Password</th>
            <th>TextArea</th>
            <th>Dropdown</th>
            <th>Gender</th>
            <th>FileMAnagement</th>
            <th>Checkbox</th>
          </thead>
          <tbody>
            {
              storage.map((item)=>{
                return(
                  <tr>
                    <td>{item.Name.FName} {item.Name.LName}</td>
                    <td>{item.Date}</td>
                    <td>{item.Password}</td>
                    <td>{item.TextArea}</td>
                    <td>{item.Fruits}</td>
                    <td>{item.Gender}</td>
                    <td>{item.cvfile}</td>
                    <td>{item.fruits_Check}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
    </div>
  );
};

export default JoiningForm;
