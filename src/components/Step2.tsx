import React from "react";
import { useForm } from "react-hook-form";
import { Action, State } from "../App";

export type Step2Inputs = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  residentialAddress?: string;
  moreThan3Years?: string;
  livingSituation?: string;
  maritalStatus?: string;
  dependents?: string;
  driversLicense?: string;
};

type Props = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

function Step2({ state, dispatch }: Props) {
  const { register, handleSubmit, watch, getValues, trigger, errors } = useForm<
    Step2Inputs
  >({
    defaultValues: { ...state.step2 },
  });
  const onSubmit = (data: Step2Inputs) => {
    editForm(data);
    console.log(data);
  };

  const editForm = (data: Step2Inputs) => {
    // TODO: Update Reducer State
    dispatch({
      type: "SET_STEP_2",
      payload: {
        step: 3,
        step2: { ...data },
      },
    });
  };

  return (
    <>
      <div>
        <div className="text-5xl">02</div>
        <div className="text-2xl">Profile</div>
      </div>
      <form className="grid justify-start" onSubmit={handleSubmit(onSubmit)}>
        {/* FIRST AND LAST NAME */}
        <div className="flex">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="p-2 mt-1 mb-5 border rounded-lg"
              name="firstName"
              id="firstName"
              // defaultValue="Jane"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="p-2 mt-1 mb-5 border rounded-lg"
              name="lastName"
              id="lastName"
              // defaultValue="Doe"
              ref={register({ required: true })}
            />
          </div>
        </div>

        {/* GENDER */}
        <div className="mb-5">
          <div>Gender</div>
          <input
            name="gender"
            id="female"
            type="radio"
            value="Female"
            // defaultChecked
            ref={register({ required: true })}
          />
          <label htmlFor="female" className="ml-2 mr-8">
            Female
          </label>

          <input
            name="gender"
            id="male"
            type="radio"
            value="Male"
            // defaultChecked
            ref={register({ required: true })}
          />
          <label htmlFor="male" className="ml-2">
            Male
          </label>
        </div>
        {errors.gender && <span>This field is required</span>}

        {/* RESIDENTIAL ADDRESS */}
        <label htmlFor="residentialAddress">residentialAddress</label>
        <input
          className="p-2 mt-1 mb-5 border rounded-lg"
          name="residentialAddress"
          id="residentialAddress"
          type="number"
          // defaultValue="3942 Pine Street"
          ref={register({ required: true })}
        />

        {/* LENGTH OF STAY */}
        <div className="mb-5">
          <div>I have lived here for more than 3 years</div>
          <input
            name="moreThan3Years"
            id="yes"
            type="radio"
            value="yes"
            // defaultChecked
            ref={register({ required: true })}
          />
          <label htmlFor="yes" className="ml-2 mr-8">
            Yes
          </label>

          <input
            name="moreThan3Years"
            id="no"
            type="radio"
            value="no"
            // defaultChecked
            ref={register({ required: true })}
          />
          <label htmlFor="no" className="ml-2">
            No
          </label>
        </div>
        {errors.moreThan3Years && <span>This field is required</span>}

        {/* LIVING SITUATION */}
        <label htmlFor="livingSituation">Living Situation</label>
        <select
          className="p-2 mt-1 mb-5 border rounded-lg"
          name="livingSituation"
          id="livingSituation"
          // defaultValue
          ref={register({ required: true })}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>

        {/* MARITAL STATUS */}
        <label htmlFor="maritalStatus">Marital Status</label>
        <select
          className="p-2 mt-1 mb-5 border rounded-lg"
          name="maritalStatus"
          id="maritalStatus"
          // defaultValue
          ref={register({ required: true })}
        >
          <option value="married">Married</option>
          <option value="notMarried">Not Married</option>
        </select>

        {/* DEPENDENTS */}
        <label htmlFor="dependents">Dependents</label>
        <select
          className="p-2 mt-1 mb-5 border rounded-lg"
          name="dependents"
          id="dependents"
          // defaultValue
          ref={register}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4+">4+</option>
        </select>

        {/* DRIVER'S LICENSE NUMBER */}
        <label htmlFor="driverLicense">driverLicense</label>
        <input
          className="p-2 mt-1 mb-5 border rounded-lg"
          id="driverLicense"
          name="driverLicense"
          ref={register}
          // defaultValue="3942 Pine Street"
        />

        <div className="flex space-x-12">
          <button
            onClick={async () => {
              const formValues = getValues();
              console.log("formValues", formValues);
              const valid = await trigger();

              dispatch({
                type: "SET_STEP_2",
                payload: {
                  step: 1,
                  step2: { ...formValues },
                },
              });

              if (valid) {
                // TODO: Let people go back if it's not valid?
              }
            }}
            className="px-10 py-2 font-bold text-gray-700 bg-white border rounded-lg"
          >
            Back
          </button>
          <input
            // onClick={() => dispatch({ type: "STEP-3" })}
            type="submit"
            value="Save and Continue"
            className="px-10 py-2 font-bold text-white bg-blue-500 rounded-lg"
          />
        </div>
      </form>
    </>
  );
}

export default Step2;
