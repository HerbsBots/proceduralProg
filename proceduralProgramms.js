
let v1 = [1, 2, 3];

let v2 = [4, 5, 6];

let ps = {val: 0};

let vectors = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];


// dot product


function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
  }

  
  // orthogonal vectors

  function orthogonalVectors(vectors) {
    let orthogonal = true;
    for (let i = 0; i < vectors.length; i += 2) {
        let v1 = vectors[i];
        let v2 = vectors[i + 1];
        if (dotProduct(v1, v2) !== 0) {
            orthogonal = false;
            break;
        }
    }
    if (orthogonal) {
        console.log("The vectors are orthogonal");
    } else {
        console.log("The vectors are not orthogonal");
    }
  }

dotProduct(v1, v2, ps);
return ps.val;
