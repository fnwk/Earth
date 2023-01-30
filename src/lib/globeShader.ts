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
  uniform sampler2D globeTexture;

  varying vec2 vUV;
  varying vec3 vNormal;

  vec3 color;
  
  void main() {
    float atmosphereIntensity = 1.4 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(atmosphereIntensity, 1.5);

    float shadowIntensity =  1.5 - dot(dot(vUV, vec2(1.0, 0.0)), dot(vUV, vec2(0.0, 1.0)));
    vec3 shadow = vec3(-1.5, -1.5, -1.5) * pow(shadowIntensity, 0.9);

    if (vNormal.x < 0.2) {
      color = vec3(atmosphere + texture2D(globeTexture, vUV).xyz);
    } else {
      color = vec3(0.0, 0.0, 0.0);
    }

    gl_FragColor = vec4(color, 1.0);
  } 
`;

export { vertexShader, fragmentShader };
