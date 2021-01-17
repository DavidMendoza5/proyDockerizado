
function postStudent(body) {
    let isOk = true
    let ok = validateStudent(body)
    if(!ok) {
        isOk = false
    }
    return isOk
}

function validateStudent (body) {
    let ok = false
    let { phone, email, student_id } = body
    if(body && typeof body === 'object' && Object.keys(body).length> 0 ){
      if(student_id !== undefined && student_id !== '' && student_id.length > 5){
        if(email !== undefined && email !== '' && email.length > 10) {
            if(phone !== undefined && phone !== '' && phone.length == 10) {
                ok = true
            }
        }
      }
    }
    return ok
}

module.exports = {
    postStudent
}