const vertexShader = `
  varying vec2 vUV;

  void main() {
    vUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D cloudsTexture;

  varying vec2 vUV;

  void main() {
    vec3 color = texture2D(cloudsTexture, vUV).xyz;

    
    gl_FragColor = vec4(color, color);
  }
`;

export { vertexShader, fragmentShader };
