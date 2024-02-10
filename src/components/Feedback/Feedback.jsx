import React from 'react'

function Feedback() {
  return (
    <div>
       
<form id="contact_form" name="contact_form" method="post"  className='feed-form' style={{ alignItems:'center',display:'flex',flexDirection:'column' }}>
    <div class="mb-5 row" style={{marginLeft:'5rem'}}>
        <div class="row">
            <label>First Name</label>
            <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name"/>
        </div>
        <div class="row">
            <label>Last Name</label>
            <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name"/>
        </div>
        <div class="row">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                placeholder="name@example.com"/>
        </div>
        <div class="row">
            <label for="phone_input">Phone</label>
            <input type="tel" required maxlength="50" class="form-control" id="phone_input" name="Phone"
                placeholder="Phone"/>
        </div>
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="7" style={{width:'60rem'}}></textarea >
    </div>
     
     
    <button type="submit" class="btn btn-primary px-4 btn-lg">Post</button>
</form>
    </div>
  )
}

export default Feedback
