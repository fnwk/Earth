const vertexShader = `
  varying vec2 vUV;
  varying vec3 vNormal;

  void main() {
    vUV = uv;
    vNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUV;
  varying vec3 vNormal;

  const float PI = 3.14159265f;

  void main() {
    float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.5);


    if (vNormal.x > -0.1) {
      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
    }
  }
`;

export { vertexShader, fragmentShader };
