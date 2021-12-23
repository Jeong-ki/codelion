export let 이름 = "이름";
export let 나이 = 26;

export function 한살더먹음() {
  나이 += 1;
}

export function 값가져와() {
  return 나이;
}

// module.exports.이름 = 이름;
// module.exports.나이 = 나이;
// module.exports.한살더먹음 = 한살더먹음;
// module.exports.값가져와 = 값가져와;