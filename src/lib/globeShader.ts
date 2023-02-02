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
  uniform sampler2D cloudsTexture;
  uniform sampler2D lightsTexture;

  varying vec2 vUV;
  varying vec3 vNormal;

  vec3 color;
  const float PI = 3.14159265f;
  
  void main() {    
    float atmosphereIntensity = 1.2 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(2.1, 2.4, 5.2) * pow(atmosphereIntensity, 3.3);
    
    float curve = -0.5 * (0.5 * sin(vNormal.y + PI / 2.0) - 0.5);
    
    vec3 dayColor = texture2D(globeTexture, vUV).xyz + atmosphere + texture2D(cloudsTexture, vUV).xyz;
    vec3 nightColor = texture2D(lightsTexture, vUV).xyz * vec3(1.5, 1.1, 1.) + texture2D(cloudsTexture, vUV).xyz * 0.03;

    if (vNormal.x > curve )  {
      color = dayColor;
    } else if(vNormal.x > curve - 0.2){
      color = mix(dayColor, nightColor, distance(vNormal.x, curve) * 5.0);
    } else {
      color = nightColor;
    }

    gl_FragColor = vec4(color, 1.0);
  } 
`;

export { vertexShader, fragmentShader };
