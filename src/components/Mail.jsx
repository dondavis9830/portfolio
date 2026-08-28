import React from 'react'

export default function Mail() {
  return (
    <div>
      <div className="fixed left-10 bottom-10 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-slate-600 shadow-lg transition hover:bg-cyan-500">
        <a  href="https://mail.google.com/mail/u/0/?hl=en#inbox?compose=CllgCHrlFNfzRrkmssmXDjHcfFwQKxsXxjkvZDKkhhRbNfWsldhqxhTcPzrwDssfXddFwPCGdMg" target='blank'  className="text-white" title="Send me an email" >
          <i className="fa-solid fa-envelope fa-beat"></i>
        </a>
      </div>
    </div>
  )
}
