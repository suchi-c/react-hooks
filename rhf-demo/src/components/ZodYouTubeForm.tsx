import { useForm, } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod';

const schema = z.object({
    username: z.string().nonempty('username is required'),
    email: z.string().email('email format invalid').nonempty('email is required'),
    channel: z.string().nonempty('channel is required'),
  }); 


type formValues = {
    username: string;
    email: string;
    channel: string;
};

export const ZodYouTubeForm = () => {

    const form = useForm<formValues>({
        defaultValues:{
          username:'Luffy',
          email:'',
          channel:'',
        },
        resolver:zodResolver(schema)
});
const { register, control,handleSubmit,formState  } = form;
const {errors} = formState;

const onSubmit = (data:formValues)=>{
    console.log("form submitted",data)
  }

return (
    <div>
      <h2>ZOD Youtube Form </h2>
      {/* <h3>Username: {watchUsername}</h3> */}
      <form onSubmit={handleSubmit(onSubmit  )} noValidate>
        <div className='form-control'>
          <label htmlFor="username">username</label>
        <input type="text" id="username" 
        {...register("username",{required:'username is required'})}/>
        <p className='error'>{errors.username?.message}</p>
        </div>

        <div className='form-control'>
        <label htmlFor="email">email</label>
        <input type="email" id="email"  {...register("email",{required:'email is required',pattern:
          {
            value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message:'email is invalid',
          },
          validate:{
            notAdmin:(fieldValue)=>{
              return fieldValue !== 'admin@example.com" ' || 'enter different email'
          }
          }
        })} />
         <p className='error'>{errors.email?.message}</p>
         </div>

         <div className='form-control'>
        <label htmlFor="channel">channel</label>
        <input type="text" id="channel" {...register("channel",{required:'channel is required'})} /><br></br><br></br>
        <p className='error'>{errors.channel?.message}</p>
        </div>
        <button  type="submit">Submit</button>
        </form>
        <DevTool control={control} placement='top-right' />
        </div>
)
}
