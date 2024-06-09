

export default function VirtualAssistant() {
    function generateImage() {

    }
    
    return (
        <>
            <h1>CHOOSE REQUIRED SERVICE</h1>
            <div className="container">
                <div className="inner">
                    <div className="item">
                        <img src="imgen.webp" className="img" />
                        <button className="btn" id="btnImageGeneration">IMAGE  GENERATION</button>
                    </div>
                    <div className="item">
                        <img src="iman.webp" className="img" />
                        <button className="btn" id="btnImageAnalysis">IMAGE  ANALYSIS</button>
                    </div>
                    <div className="item">
                        <img src="tta.webp" className="img" />
                        <button className="btn" id="btnTextToAudio">TEXT TO  AUDIO
                        </button>
                    </div>
                    <div className="item">
                        <img src="att.webp" className="img" />
                        <button className="btn" id="btnAudioToText">AUDIO TO  TEXT
                        </button>
                    </div>
                    <div className="item">
                        <img src="imtotext.webp" className="img" />
                        <button className="btn" id="btnExtractText" >EXTRACT TEXT FROM IMAGE  </button>
                    </div>
                    <div className="item">
                        <img src="bgremove.webp" className="img" />
                        <button className="btn" id="btnRemoveBackg" >REMOVE IMAGE BACKGROUND </button>
                    </div>
                    <div className="item">
                        <img src="suno.webp" className="img" />
                        <button className="btn" id="btnSong" >CREATE A  SONG</button>
                    </div>
                    <div className="item">
                        <img src="locationf.webp" className="img" />
                        <button className="btn" id="btnLocation" >FIND LOCATION FROM PICTURE</button>
                    </div>
                    <div className="item">
                        <img src="chatwdata.webp" className="img" style={{ opacity: 0.5 }} />
                        <button className="btn" id="btnChatWithData" disabled style={{ opacity: 0.5 }}>CHAT WITH YOUR DATA (SOON)</button>
                    </div>
                    <div className="item">
                        <img src="gpts.webp" className="img" style={{ opacity: 0.5 }} />
                        <button className="btn" id="btnGPTs" disabled style={{ opacity: 0.5 }}>GPTS (COMING SOON)</button>

                    </div>
                    <div className="item">
                        <img src="ytttext.webp" className="img" style={{ opacity: 0.5 }} />
                        <button className="btn" id="btnYTtranscribe" disabled style={{ opacity: 0.5 }}>TEXT FROM YOUTUBE VIDEO (SOON)  </button>
                    </div>
                    <div className="item">
                        <img src="legalrew.webp" className="img" style={{ opacity: 0.5 }} />
                        <button className="btn" id="btnLegalReview" disabled style={{ opacity: 0.5 }}>REVIEW LEGAL DOCUMENTS (SOON)</button>
                    </div>
                </div>

                <div id="imageGenerationForm" style={{ display: "none" }}>
                    <label htmlFor="inputText">Prompt:</label>
                    <textarea id="inputText" placeholder="Enter your image prompt"></textarea>
                    <div id="modal">
                        <div>
                            <p id="modalText">Sending data...</p>
                        </div>
                    </div>
                    <button onClick={generateImage}>Generate Image</button>
                    <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                        Cost: 1 credit
                    </div>
                </div>


                {/* <div id="imageAnalysisForm" style={{ display: "none" }}>
                    <label htmlFor="imageUpload">Upload Image (png, jpeg, webp, gif up to 20mb):</label>
                    <input type="file" id="imageUpload" accept=".png, .jpeg, .jpg, .webp, .gif">

                        <label htmlFor="analysisPrompt">Analysis Prompt:</label>
                        <textarea id="analysisPrompt" placeholder="Describe what to analyze in the image"></textarea>
                        <div id="modal1">
                            <div>
                                <p id="modalText1">Sending data...</p>
                            </div>
                        </div>
                        <button onclick="analyzeImage()">Analyze Image</button>
                        <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                            Cost: 1 credit
                        </div>
                </div>


                <div id="textToAudioForm" style={{ display: "none" }}>
                    <label htmlFor="textInputt2a">Enter Text:</label>
                    <textarea id="textInputt2a" placeholder="Type your text here..."></textarea>

                    <label htmlFor="voiceSelector">Choose Voice:</label>
                    <select id="voiceSelector">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="languageSelector">Choose Language:</label>
                    <select id="languageSelector">
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                        <option value="zh">Chinese</option>
                        <option value="fr">French</option>
                        <option value="ja">Japanese</option>
                        <option value="he">Hebrew</option>
                        <option value="hi">Hindi</option>
                        <option value="lt">Lithuanian</option>
                        <option value="es">Spanish</option>
                        <option value="de">German</option>
                    </select>

                    <div id="modal2">
                        <div>
                            <p id="modalText2">Sending data...</p>
                        </div>
                    </div>

                    <button onclick="convertTextToAudio()">Convert to Audio</button>

                    <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                        Cost: 1 credit
                    </div>
                </div>

                <div id="audioToTextForm" style={{ display: "none" }}>
                    <label htmlFor="audioUpload">Upload Audio File (MP3, WAV, M4A up to 25MB):</label>
                    <input type="file" id="audioUpload" accept="audio/mp3,audio/wav,audio/m4a">
                        <div id="modal3">
                            <div>
                                <p id="modalText3">Sending data...</p>
                            </div>
                        </div>
                        <button onclick="convertAudioToText()">Convert Audio to Text</button>
                        <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                            Cost: 1 credit
                        </div>
                </div>

                <div id="ocrForm" style={{ display: "none" }}>
                    <label htmlFor="ocrUpload">Upload Image (png, jpeg, tiff up to 20mb):</label>
                    <input type="file" id="ocrUpload" accept=".png, .jpeg, .jpg, .tiff">
                        <div id="modal4">
                            <div>
                                <p id="modalText4">Sending data...</p>
                            </div>
                        </div>
                        <button onclick="extractText()">Extract Text</button>
                        <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                            Cost: 1 credit
                        </div>
                </div>

                <div id="bgRemForm" style={{ display: "none" }}>
                    <label htmlFor="bgRemUpload">Upload Image (png, jpeg, tiff up to 20mb):</label>
                    <input type="file" id="bgRemUpload" accept=".png, .jpeg, .jpg, .tiff">
                        <div id="modal5">
                            <div>
                                <p id="modalText5">Sending data...</p>
                            </div>
                        </div>
                        <button onclick="remBg()">Remove Background</button>
                        <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                            Cost: 1 credit
                        </div>
                </div>

                <div id="songForm" style={{ display: "none" }}>
                    <label htmlFor="songText">Prompt:</label>
                    <textarea id="songText" placeholder="An uplifting pop song about TON blockchain"></textarea>


                    <div id="modal6">
                        <div>
                            <p id="modalText">Sending data...</p>
                        </div>
                    </div>
                    <button onclick="createSong()">Create a song</button>
                    <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                        Cost: 1 credit
                    </div>

                </div>

                <div id="locationForm" style={{ display: "none" }}>
                    <label htmlFor="locationUpload">Upload Location Image (png, jpeg, webp, gif up to 20mb):</label>
                    <input type="file" id="locationUpload" accept=".png, .jpeg, .jpg, .webp, .gif">


                        <div id="modal7">
                            <div>
                                <p id="modalText1">Sending data...</p>
                            </div>
                        </div>
                        <button onclick="findLocation()">Search for location</button>
                        <div id="creditCost" style={{ textAlign: "center", marginTop: "10px" }}>
                            Cost: 1 credit
                        </div>
                </div> */}


            </div>
            {/* </div > */}

        </>
    );
}