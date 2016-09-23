import React from 'react'
import User from './User.jsx'
import Logo from './Logo.jsx'

export default React.createClass({
	render(){
		return(
			<div className="tool_bar">
				<User />

				<div className="menu">
					<div className="tools">
						<svg viewBox="0 0 54 54">
							<g>
								<path d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
									c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
									c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
									C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
									c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
									c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
									c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
									c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
									c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
									c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
									c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
									S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
									C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
									c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
									c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
									c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
									c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
									C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
									c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
									c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
									C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
									c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
									l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"/>
								<path d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7
									s7,3.141,7,7S30.859,34,27,34z"/>
							</g>
						</svg>
						<p>SETTINGS</p>
					</div>
					<div className="tools">
						<svg viewBox="0 0 511 511">
						  <g>
						    <path d="m401.38,349.894c-0.299-0.084-0.604-0.149-0.911-0.195l-62.406-9.363c-10.092-6.529-11.044-22.723-11.063-40.259 19.708-20.313 32-48.909 32-80.542v-2.562c15.296-13.583 24-32.855 24-53.438v-48c0-39.425-32.075-71.5-71.5-71.5h-104c-14.929,0-27.465,10.44-30.693,24.401-27.458,3.317-48.807,26.762-48.807,55.099v40c0,20.586 8.703,39.856 24,53.439v2.561c0,31.633 12.292,60.229 31.999,80.542-0.018,17.536-0.971,33.729-11.063,40.259l-62.406,9.363c-0.307,0.046-0.611,0.111-0.911,0.195-13.725,3.845-25.403,12.356-33.772,24.615-7.639,11.19-11.847,24.698-11.847,38.036v30.99c0,12.92 11.526,23.431 25.693,23.431h331.613c14.167,0 25.693-10.511 25.693-23.431v-30.99c0-13.337-4.208-26.845-11.847-38.035-8.368-12.259-20.047-20.771-33.772-24.616zm-145.88-18.859c20.94,0 40.443-6.74 56.75-18.303 0.721,13.688 3.556,28.875 14.688,38.028-6.02,30.648-35.931,53.275-71.438,53.275s-65.418-22.627-71.438-53.275c11.133-9.153 13.967-24.34 14.688-38.028 16.307,11.563 35.81,18.303 56.75,18.303zm-88.5-116.808c0.042-0.457 0.041-0.914 0-1.369v-41.324c0-13.509 10.991-24.5 24.5-24.5h136c4.142,0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-136c-21.78,0-39.5,17.72-39.5,39.5v22.605c-5.817-9.005-9-19.562-9-30.605v-40c0-22.332 18.168-40.5 40.5-40.5 4.142,0 7.5-3.357 7.5-7.5 0-9.098 7.402-16.5 16.5-16.5h104c31.154,0 56.5,25.346 56.5,56.5v48c0,11.041-3.183,21.598-9,30.604v-30.604c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v56c0,53.21-39.701,96.5-88.5,96.5s-88.5-43.29-88.5-96.5v-5.307zm265,229.308c0,4.57-4.897,8.431-10.693,8.431h-331.614c-5.796,0-10.693-3.861-10.693-8.431v-30.99c0-19.008 11.758-41.543 34.235-48.084l56.587-8.49c8.389,36.441 43.851,63.064 85.678,63.064s77.289-26.623 85.678-63.064l56.587,8.49c22.477,6.541 34.235,29.076 34.235,48.084v30.99z"/>
						    <path d="m47.5,380.035h-28.229c-2.444,0-4.271-1.481-4.271-2.807v-20.051c0-11.261 6.893-24.589 20.075-28.519l40.826-6.125c0.177-0.026 0.348-0.066 0.521-0.105 0.075-0.017 0.151-0.026 0.226-0.045 0.28-0.071 0.551-0.161 0.816-0.262 0.064-0.024 0.127-0.054 0.19-0.081 0.218-0.09 0.43-0.189 0.637-0.298 0.034-0.018 0.071-0.03 0.105-0.049 0.066-0.036 0.126-0.076 0.192-0.113 0.056-0.033 0.112-0.064 0.167-0.098 9.087-5.184 12.232-14.571 13.315-23.744 9.956,5.908 21.388,9.281 33.544,9.281 10.203,0 20.037-2.318 29.229-6.891 3.708-1.845 5.22-6.346 3.375-10.055-1.845-3.709-6.347-5.22-10.056-3.375-7.098,3.53-14.685,5.321-22.548,5.321-30.115,5.68434e-14-54.614-26.821-54.614-59.788v-31.992c0-7.281 5.923-13.204 13.204-13.204h19.296c4.142,0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-19.296c-15.552,0-28.204,12.652-28.204,28.204v3.931c-0.652-2.642-1-5.379-1-8.171v-25.88c0-12.989 10.567-23.556 23.556-23.556 4.142,0 7.5-3.358 7.5-7.5 0-4.427 3.601-8.028 8.028-8.028h9.416c4.142,0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-9.416c-10.271,0-18.993,6.759-21.952,16.063-18.213,3.067-32.132,18.949-32.132,38.021v25.88c0,13.893 5.798,26.904 16,36.173v0.06c0,21.268 8.32,40.475 21.63,54.105-0.081,9.538-0.811,18.088-5.526,21.599l-39.744,5.963c-0.307,0.046-0.611,0.111-0.911,0.195-20.647,5.784-31.449,26.051-31.449,43.083v20.051c0,9.818 8.645,17.807 19.271,17.807h28.229c4.142,0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5z"/>
						    <path d="m479.551,314.093c-0.299-0.083-0.604-0.149-0.911-0.195l-39.744-5.963c-4.715-3.511-5.446-12.061-5.527-21.598 13.31-13.631 21.63-32.838 21.63-54.106v-0.06c10.202-9.269 16-22.281 16-36.181v-40.456c0-21.78-17.72-39.5-39.5-39.5h-24c-4.142,0-7.5,3.358-7.5,7.5 0,4.143 3.358,7.5 7.5,7.5h24c13.509,0 24.5,10.991 24.5,24.5v40.464c0,2.792-0.348,5.529-1,8.171v-3.931c0-15.552-12.652-28.204-28.204-28.204h-19.295c-4.142,0-7.5,3.358-7.5,7.5 0,4.143 3.358,7.5 7.5,7.5h19.296c7.281,0 13.204,5.923 13.204,13.204v31.992c0,32.967-24.499,59.788-54.612,59.788-7.864,0-15.45-1.791-22.548-5.321-3.71-1.845-8.211-0.333-10.056,3.375-1.845,3.709-0.333,8.21 3.375,10.055 9.192,4.572 19.026,6.891 29.229,6.891 12.155,0 23.588-3.373 33.543-9.281 1.083,9.172 4.229,18.56 13.316,23.744 0.054,0.034 0.111,0.065 0.166,0.098 0.065,0.037 0.126,0.077 0.192,0.113 0.034,0.019 0.071,0.031 0.105,0.049 0.206,0.109 0.418,0.208 0.636,0.298 0.064,0.027 0.127,0.057 0.191,0.081 0.265,0.101 0.535,0.191 0.815,0.262 0.076,0.019 0.152,0.029 0.228,0.046 0.171,0.038 0.342,0.078 0.518,0.104l40.825,6.125c13.183,3.93 20.076,17.258 20.076,28.519v20.051c0,1.325-1.827,2.807-4.271,2.807h-28.228c-4.142,0-7.5,3.358-7.5,7.5 0,4.143 3.358,7.5 7.5,7.5h28.229c10.626,0 19.271-7.988 19.271-17.807v-20.051c0-17.031-10.802-37.298-31.449-43.083z"/>
						  </g>
						</svg>
						<p>MANAGE VOLUNTEER</p>
					</div>
					<div className="tools">
						<svg viewBox="0 0 54 54">
							<g>
								<path d="M53.516,1.143c-0.3-0.182-0.674-0.19-0.983-0.027L36,9.869L19.468,1.116c-0.013-0.007-0.028-0.009-0.041-0.015
									c-0.048-0.023-0.097-0.04-0.147-0.055c-0.028-0.008-0.055-0.017-0.083-0.023c-0.055-0.011-0.111-0.015-0.168-0.017
									c-0.025-0.001-0.05-0.004-0.076-0.003c-0.054,0.003-0.107,0.013-0.16,0.025c-0.03,0.006-0.06,0.01-0.089,0.019
									c-0.007,0.002-0.014,0.002-0.02,0.004l-18,6C0.275,7.187,0,7.569,0,8v43c0,0.321,0.154,0.623,0.416,0.812
									C0.588,51.935,0.793,52,1,52c0.106,0,0.213-0.017,0.316-0.052l17.646-5.882l16.657,6.859c0.014,0.006,0.03,0.004,0.044,0.009
									C35.773,52.973,35.885,53,36,53c0.09,0,0.179-0.015,0.266-0.039c0.028-0.008,0.054-0.021,0.082-0.031
									c0.04-0.015,0.082-0.026,0.12-0.046l17-9C53.795,43.711,54,43.37,54,43V2C54,1.649,53.816,1.324,53.516,1.143z M2,8.721l16-5.333
									v26.992c-0.43,0.078-0.854,0.166-1.264,0.274c-0.534,0.142-0.852,0.689-0.71,1.223c0.119,0.448,0.523,0.744,0.966,0.744
									c0.084,0,0.171-0.011,0.257-0.033c0.24-0.064,0.502-0.096,0.751-0.148v11.84L2,49.612V8.721z M20,32.16
									c0.321-0.025,0.632-0.066,0.961-0.073c0.552-0.012,0.99-0.469,0.979-1.021c-0.012-0.545-0.457-0.979-1-0.979
									c-0.007,0-0.015,0-0.022,0c-0.31,0.007-0.615,0.024-0.918,0.045V3.661l15,7.941v21.194c-0.714-0.031-1.44-0.115-2.201-0.262
									c-0.544-0.107-1.067,0.249-1.172,0.791s0.25,1.067,0.792,1.172c0.886,0.172,1.746,0.256,2.582,0.289v15.721L20,44.33V32.16z
									 M52,42.397l-15,7.941v-15.66c0.372-0.169,0.62-0.549,0.587-0.98c-0.029-0.374-0.269-0.674-0.587-0.821V11.602l15-7.941V42.397z"/>
								<path d="M11,9c-2.757,0-5,2.243-5,5c0,2.415,1.721,4.434,4,4.899V21c0,0.553,0.448,1,1,1s1-0.447,1-1v-2.101
									c2.279-0.465,4-2.484,4-4.899C16,11.243,13.757,9,11,9z M11,17c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S12.654,17,11,17z"/>
								<path d="M45.07,27.673c0.12,0.047,0.243,0.068,0.364,0.068c0.4,0,0.777-0.241,0.932-0.636c0.47-1.199,0.847-2.553,1.123-4.024
									c0.102-0.542-0.256-1.064-0.799-1.167c-0.546-0.09-1.065,0.257-1.167,0.8c-0.252,1.348-0.595,2.58-1.019,3.663
									C44.303,26.89,44.556,27.471,45.07,27.673z"/>
								<path d="M12.805,32.342c-1.207,0.757-2.295,1.705-3.235,2.82c-0.356,0.422-0.302,1.053,0.12,1.409
									c0.188,0.158,0.417,0.235,0.644,0.235c0.285,0,0.567-0.121,0.765-0.355c0.806-0.956,1.737-1.769,2.768-2.414
									c0.468-0.294,0.609-0.911,0.316-1.379C13.89,32.19,13.272,32.048,12.805,32.342z"/>
								<path d="M8.627,38.276c-0.502-0.23-1.096-0.013-1.327,0.489c-1.026,2.226-1.28,4.023-1.291,4.099
									c-0.075,0.547,0.307,1.05,0.854,1.125c0.046,0.007,0.093,0.01,0.138,0.01c0.491,0,0.919-0.362,0.99-0.861
									c0.002-0.016,0.231-1.597,1.125-3.534C9.347,39.101,9.128,38.508,8.627,38.276z"/>
								<path d="M40.423,33.729c0.153,0,0.309-0.035,0.454-0.109c1.292-0.661,2.431-1.599,3.384-2.786c0.346-0.431,0.277-1.061-0.154-1.406
									c-0.43-0.343-1.06-0.276-1.406,0.154c-0.776,0.967-1.696,1.726-2.735,2.257c-0.492,0.252-0.687,0.854-0.435,1.346
									C39.709,33.53,40.06,33.729,40.423,33.729z"/>
								<path d="M29.17,31.432c-0.441-0.185-0.699-0.313-0.716-0.322c-0.065-0.033-0.134-0.06-0.205-0.078
									c-1.083-0.278-2.15-0.498-3.173-0.654c-0.545-0.086-1.056,0.291-1.14,0.837c-0.083,0.546,0.292,1.057,0.838,1.14
									c0.926,0.142,1.893,0.34,2.877,0.59c0.134,0.064,0.39,0.185,0.748,0.334c0.126,0.053,0.257,0.077,0.385,0.077
									c0.391,0,0.763-0.23,0.923-0.614C29.92,32.23,29.68,31.644,29.17,31.432z"/>
								<path d="M46.923,19.931c0.022,0.001,0.043,0.002,0.065,0.002c0.523,0,0.963-0.406,0.997-0.937c0.062-0.961,0.093-1.978,0.093-3.02
									c0-0.347-0.003-0.699-0.01-1.058c-0.01-0.553-0.49-0.973-1.018-0.982c-0.552,0.01-0.992,0.466-0.982,1.018
									c0.006,0.347,0.01,0.688,0.01,1.022c0,1-0.03,1.973-0.089,2.893C45.954,19.42,46.372,19.895,46.923,19.931z"/>
								<path d="M8.293,28.707C8.488,28.902,8.744,29,9,29s0.512-0.098,0.707-0.293L11,27.414l1.293,1.293C12.488,28.902,12.744,29,13,29
									s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L12.414,26l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414
									s-1.023-0.391-1.414,0L11,24.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L9.586,26l-1.293,1.293
									C7.902,27.683,7.902,28.316,8.293,28.707z"/>
							</g>
						</svg>

						<p>DIPATCH</p>
					</div>
					<div className="tools">
						<svg viewBox="0 0 512 512">
						  <g>
						    <path d="m216.3,45.4c-106,15.4-184.4,105.4-184.4,213.8-7.10543e-15,119.2 97,216.2 216.2,216.2 52,0 101.7-18.6 141-52.5l-163.5-163.5c-6-6-9.3-14-9.3-22.5v-191.5l0-0zm31.7,450.8c-130.7,0-237-106.3-237-237 0-123 92.3-224.5 214.7-235.9 2.9-0.3 5.8,0.7 8,2.7 2.2,2 3.4,4.8 3.4,7.7v203.3c0,2.9 1.1,5.7 3.2,7.7l171.2,171.2c2,2 3.1,4.7 3.1,7.5 0,2.8-1.2,5.5-3.2,7.4-44.4,42.2-102.4,65.4-163.4,65.4z"/>
						    <g>
						      <path d="m286.3,15.8c-3-0.3-10.4,0.9-11.4,10.4v194.4c0,2.8 1.1,5.4 3.1,7.4l162.8,162.8c7.4,6.4 14.1,1.2 15.8-1.3 29-40.5 44.4-88.2 44.4-137.8-5.68434e-14-123-92.3-224.4-214.7-235.9zm160.3,351.4l-150.9-150.9v-178.3c105.9,15.5 184.4,105.4 184.4,213.8 0,41.1-11.5,80.7-33.5,115.4z"/>
						      <path d="m240.3,244.7c-2.1-2.1-3.2-4.8-3.2-7.7v-203.4c-0.8-9.3-8.5-10.7-11.4-10.4-122.4,11.5-214.7,112.9-214.7,236 0,130.7 106.3,237 237,237 60.9,0 118.9-23.3 163.3-65.5 2-1.9 6-8.1 0.2-14.9l-171.2-171.1zm7.7,230.7c-119.2,0-216.2-97-216.2-216.2 0-108.4 78.5-198.3 184.4-213.8v191.5c0,8.5 3.3,16.5 9.3,22.5l163.5,163.4c-39.3,34-89,52.6-141,52.6z"/>
						    </g>
						  </g>
						</svg>
						<p>DATA VISUAL</p>
					</div>
				</div>
				
				<Logo />
			</div>
		)
	}

})