const videoIds = {
  video1: "ZHryB1xqK4M",
  video2: "_snE97OcHJU",
  video3: "1w60t-IpNZA",
  video4: "482p6huA8xk",
  video5: "hpMQhK426_Q",
  video6: "M0G9l0GaqjQ",
  video7: "PWFdPbD_kX8",
  video8: "PiiLLcsFdLo",
  video9: "HvNSpYqHOzM",
  video10: "isjTtf7rO8g",
  video11: "HL7IDfr9epk",
  video12: "BHA7nGdPdfk",
  video13: "7IByPopg3v4",
  video14: "UdNcdP_X1SI",
};

// Define a function that checks which video corresponds to a div
function checkVideo(divId) {
  // Check if the provided div ID is in the videoIds object
  if (videoIds.hasOwnProperty(divId)) {
    const videoId = videoIds[divId];
    console.log(
      `Video ${divId.slice(-1)} setado para a div! Video ID: ${videoId}`
    );
  } else {
    console.log(`Nenhum vídeo definido para a div ${divId}`);
  }
}

// Output: "Video 2 setado para a div! Video ID: gthy475tyghs"
//   https://www.youtube.com/watch?v=
