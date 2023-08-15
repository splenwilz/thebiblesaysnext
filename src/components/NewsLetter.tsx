'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Confetti from 'react-confetti'

type Props = {}
const requiredSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

export default function NewsLetter({}: Props) {
  const [status, setStatus] = useState<number | null>(null)
  const [message, setMessage] = useState<string>('')
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [run, setRun] = useState<boolean>(false)
  const [totalCounts, setTotalCounts] = useState<number>(400)
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setDimensions({
      width,
      height,
    })
  }, [])

  useEffect(() => {
    if (showConfetti) {
      scrollToTop()
    }
  }, [showConfetti])

  // useEffect(() => {
  //   const { innerWidth: width, innerHeight: height } = window
  //   setDimensions({
  //     width,
  //     height,
  //   })
  // }, [])

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={totalCounts}
          run={run}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <div className="h-100">
        <div className="flex justify-end mb-4">
          {/* Header and description */}
          <div className="pb-2 space-y-3">
            {/* <h1 className="text-2xl font-black sm:text-2.5xl">
            Subscribe to Newsletter!
          </h1> */}
            {/* <p className="text-gray-600">
            Receive notifications of high-quality articles about frontend
            development and other relevant topics delivered straight to your
            inbox. You will receive a monthly email from me, ensuring a
            spam-free experience.
          </p> */}
          </div>

          {/* Formik */}
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={requiredSchema}
            onSubmit={async (values, { resetForm }) => {
              setSubmitting(true)
              setButtonDisabled(true)
              try {
                const response = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: values?.email,
                  }),
                })
                const datas = await response.json()
                if (datas.status >= 400) {
                  setStatus(datas.status)
                  setSubmitting(false)
                  setMessage(
                    'Error joining the newsletter. You can directly send a message to info@thebiblesays.com',
                  )
                  setTimeout(() => {
                    setMessage('')
                    setButtonDisabled(false)
                  }, 2000)
                  return
                }

                setStatus(201)
                setMessage(
                  'Your subscription to our list has been confirmed. Thank you for subscribing! 👻.',
                )
                setSubmitting(false)
                setShowConfetti(true)
                setRun(true)
                setTimeout(() => {
                  setTotalCounts(0)
                  setMessage('')
                  resetForm()
                  setButtonDisabled(false)
                }, 4000)
                setTotalCounts(400)
              } catch (error) {
                setStatus(500)
                setMessage(
                  'Error joining the newsletter. You can directly send a message to info@thebiblesays.com',
                )
                setTimeout(() => {
                  setMessage('')
                  setButtonDisabled(false)
                }, 2000)
              }
            }}
          >
            {/* <input
                type="text"
                placeholder={placeholder}
                className="w-52 min-[360]:w-60 px-4 py-3 md:text-thebiblesaysblack-40 text-thebiblesaysblack-100 text-lg md:text-sm bg-thebiblesayswhite-100 focus:outline-none"
                // value={""}
                // onChange={(e) => onInputChange(e.target.value)}
              /> */}
            {/* <button
                className="bg-thebiblesaysblack-100 text-lg md:text-sm text-white px-4 py-3"
                // onClick={onSubscribeClick}
              >
                Subscribe
              </button> */}

            <Form>
              <div className="flex justify-end mb-4">
                <Field
                  type="email"
                  name="email"
                  className="w-52 min-[360]:w-60 px-4 py-4 md:text-thebiblesaysblack-40 text-thebiblesaysblack-100 text-lg md:text-sm bg-thebiblesayswhite-100 focus:outline-none"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <button
                  className="bg-thebiblesaysblack-100 text-lg md:text-sm text-white px-4 py-3"
                  type="submit"
                  disabled={buttonDisabled}
                >
                  {submitting ? 'Subscribing' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p
                  className={`font-serifpro ${
                    status !== 201
                      ? 'text-thebiblesayswhite-100'
                      : 'text-thebiblesayswhite-100'
                  } pt-4  `}
                >
                  {message}
                </p>
              )}
            </Form>

            {/* <Form>
            <div className="flex items-center space-x-2">
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email2"
                autoComplete="off"
              />
              <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? 'Submitting' : 'Submit'}
              </button>
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? 'text-red-500' : 'text-green-500'
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </Form> */}
          </Formik>
        </div>
      </div>
    </>
  )
}
