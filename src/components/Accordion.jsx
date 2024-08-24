import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

const Accordion = ({ data, courseIndex, setCourseIndex }) => {
  const fawqData = data[0]?.title === 'What does OTT means?'
  return (
    <div className='flex flex-col items-start'>
      {data?.map((item) => (
        <div
          key={item?.id}
          className={`group flex flex-col p-6  rounded-2xl items-start cursor-pointer  ${
            courseIndex === item?.id
              ? 'bg-[#141a20]'
              : 'hover:bg-cyan-500 duration-200 ease-in'
          }`}
          onClick={() => setCourseIndex(item?.id)}
        >
          <div className='flex gap-4 justify-between items-center w-full'>
            <h2
              className={`text-white  text-2xl font-medium  ${
                courseIndex !== item?.id &&
                'group-hover:text-black group-hover:font-normal'
              }`}
            >
              {item?.title}
            </h2>
            {courseIndex === item?.id ? (
              <MinusIcon
                className={`w-6 h-6 text-white ${
                  courseIndex !== item?.id && 'group-hover:text-black'
                }`}
                aria-hidden='true'
              />
            ) : (
              <PlusIcon
                className={`w-6 h-6 text-white ${
                  courseIndex !== item?.id && 'group-hover:text-black'
                }`}
                aria-hidden='true'
              />
            )}
          </div>
          <div
            className={`flex gap-4 justify-between items-center w-full ${
              !fawqData && courseIndex === item?.id
                ? 'h-24'
                : fawqData && courseIndex === item?.id
                ? 'h-52'
                : 'h-0'
            } overflow-hidden duration-300 ease-in-out`}
          >
            <p className='font-onest-regular text-lg text-slate-300'>
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
