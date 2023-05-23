import React from 'react'
import { useContext } from 'react'
import { QuestionItemPropTypes } from './QuestionItemTypes'
import { Chip } from '@material-tailwind/react'
import { redirect } from 'react-router-dom'
import AlertContext from '../../context/alert/AlertContext'
import UserContext from '../../context/user/UserContext'

const QuestionItem: React.FC<QuestionItemPropTypes> = ({
  question: { _id, question, values }
}) => {
  const UserSearchContext = useContext(UserContext)
  const alertSearchContext = useContext(AlertContext)

  if (UserSearchContext == null) return <div>No Context Found</div>
  const { user } = UserSearchContext

  if (alertSearchContext == null) return <div>No Alerts Found</div>
  const { setAlert } = alertSearchContext

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (user) {
      redirect(`/question/${_id}}`)
    } else {
      setAlert('Please login to edit a question', 'error')
    }
  }

  return _id ? (
    <React.Fragment>
      <div className='card shadow-md compact side bg-base-100 p-2 mt-3 rounded-lg'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div className='flex flex-col justify-between'>
            <h2 className='card-title'>{question}</h2>

            <div className='mt-3'>
              {values[0] &&
                values.map((value: string) => (
                  <Chip className='chip m-1' value={value} key={`${_id}`} />
                ))}
            </div>
            <a
              className='text-base-content text-opacity-40 justify-self-end'
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            >
              Edit
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <></>
  )
}

export default QuestionItem
