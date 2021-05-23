import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from '../ImageInput'
import serializeForm from 'form-serialize'

class AddContact extends Component {

    HandleFormSubmit = (event) =>{
        event.preventDefault();

        const values = serializeForm(event.target, { hash: true })
        //console.debug(values)

        if (this.props.onCreateContact) {
            this.props.onCreateContact(values); //call to parent APP.js
          }
    }

    render(){ return(

    <div>
        <Link
          className='close-create-contact'
          to='/'>
            Close
        </Link>
        <form className='create-contact-form' onSubmit ={this.HandleFormSubmit}>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='handle' placeholder='Handle' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
        
    )}
}

export default AddContact;