"use client"
import React from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`

const LoadingPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen space-y-3">
    <Loader />
    <p className="text-lg text-gray-500">Loading, please wait...</p>
  </div>
)

export default LoadingPage
