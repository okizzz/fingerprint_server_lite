const { Schema, model } = require('mongoose')
const sha1 = require('sha1');

const schema = new Schema({

  "hash": {
    "type": "String",
    "index": true,
    "unique": true
  },
  "headers": {
    "ua": {
      "type": "String"
    },
    "host": {
      "type": "String"
    },
    "connection": {
      "type": "String"
    },
    "contentLength": {
      "type": "String"
    },
    "origin": {
      "type": "String"
    },
    "contentType": {
      "type": "String"
    },
    "accept": {
      "type": "String"
    },
    "secFetchSite": {
      "type": "String"
    },
    "secFetchMode": {
      "type": "String"
    },
    "referer": {
      "type": "String"
    },
    "acceptEncoding": {
      "type": "String"
    },
    "acceptLanguage": {
      "type": "String"
    },
    "browser": {
      "name": {
        "type": "String"
      },
      "version": {
        "type": "String"
      },
      "major": {
        "type": "String"
      }
    },
    "engine": {
      "name": {
        "type": "String"
      },
      "version": {
        "type": "String"
      }
    },
    "os": {
      "name": {
        "type": "String"
      },
      "version": {
        "type": "String"
      }
    },
    "device": {
      "model": {
        "type": "String"
      },
      "type": {
        "type": "String"
      },
      "vendor": {
        "type": "String"
      },
    },
    "cpu": {
      "architecture": {
        "type": "String"
      }
    }
  },
  "navigator": {
    "appCodeName": {
      "type": "String"
    },
    "appName": {
      "type": "String"
    },
    "appVersion": {
      "type": "String"
    },
    "connection": {
      "downlink": {
        "type": "Number"
      },
      "effectiveType": {
        "type": "String"
      },
      "onchange": {
        "type": "Mixed"
      },
      "rtt": {
        "type": "Number"
      },
      "saveData": {
        "type": "Boolean"
      }
    },
    "oscpu": {
      "type": "String"
    },
    "buildID": {
      "type": "String"
    },
    "cookieEnabled": {
      "type": "Boolean"
    },
    "deviceMemory": {
      "type": "Number"
    },
    "doNotTrack": {
      "type": "Mixed"
    },
    "hardwareConcurrency": {
      "type": "Number"
    },
    "language": {
      "type": "String"
    },
    "languages": {
      "type": [
        "String"
      ]
    },
    "maxTouchPoints": {
      "type": "Number"
    },
    "onLine": {
      "type": "Boolean"
    },
    "platform": {
      "type": "String"
    },
    "product": {
      "type": "String"
    },
    "productSub": {
      "type": "String"
    },
    "userAgent": {
      "type": "String"
    },
    "vendor": {
      "type": "String"
    },
    "vendorSub": {
      "type": "String"
    },
    "webdriver": {
      "type": "Boolean"
    }
  },
  "screen": {
    "availHeight": {
      "type": "Number"
    },
    "availLeft": {
      "type": "Number"
    },
    "availTop": {
      "type": "Number"
    },
    "availWidth": {
      "type": "Number"
    },
    "colorDepth": {
      "type": "Number"
    },
    "height": {
      "type": "Number"
    },
    "orientation": {
      "angle": {
        "type": "Number"
      },
      "onchange": {
        "type": "Mixed"
      },
      "type": {
        "type": "String"
      }
    },
    "pixelDepth": {
      "type": "Number"
    },
    "width": {
      "type": "Number"
    }
  },
  "webglparams": {
    "webgl": {
      "ACTIVE_ATTRIBUTES": {
        "type": "Mixed"
      },
      "ACTIVE_TEXTURE": {
        "type": "Number"
      },
      "ACTIVE_UNIFORMS": {
        "type": "Mixed"
      },
      "ALIASED_LINE_WIDTH_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "ALIASED_POINT_SIZE_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "ALPHA": {
        "type": "Mixed"
      },
      "ALPHA_BITS": {
        "type": "Number"
      },
      "ALWAYS": {
        "type": "Mixed"
      },
      "ARRAY_BUFFER": {
        "type": "Mixed"
      },
      "ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "ATTACHED_SHADERS": {
        "type": "Mixed"
      },
      "BACK": {
        "type": "Mixed"
      },
      "BLEND": {
        "type": "Boolean"
      },
      "BLEND_COLOR": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "BLEND_DST_ALPHA": {
        "type": "Number"
      },
      "BLEND_DST_RGB": {
        "type": "Number"
      },
      "BLEND_EQUATION": {
        "type": "Number"
      },
      "BLEND_EQUATION_ALPHA": {
        "type": "Number"
      },
      "BLEND_EQUATION_RGB": {
        "type": "Number"
      },
      "BLEND_SRC_ALPHA": {
        "type": "Number"
      },
      "BLEND_SRC_RGB": {
        "type": "Number"
      },
      "BLUE_BITS": {
        "type": "Number"
      },
      "BOOL": {
        "type": "Mixed"
      },
      "BOOL_VEC2": {
        "type": "Mixed"
      },
      "BOOL_VEC3": {
        "type": "Mixed"
      },
      "BOOL_VEC4": {
        "type": "Mixed"
      },
      "BROWSER_DEFAULT_WEBGL": {
        "type": "Mixed"
      },
      "BUFFER_SIZE": {
        "type": "Mixed"
      },
      "BUFFER_USAGE": {
        "type": "Mixed"
      },
      "BYTE": {
        "type": "Mixed"
      },
      "CCW": {
        "type": "Mixed"
      },
      "CLAMP_TO_EDGE": {
        "type": "Mixed"
      },
      "COLOR_ATTACHMENT0": {
        "type": "Mixed"
      },
      "COLOR_BUFFER_BIT": {
        "type": "Mixed"
      },
      "COLOR_CLEAR_VALUE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "COLOR_WRITEMASK": {
        "type": ["Boolean"],
        default: undefined
      },
      "COMPILE_STATUS": {
        "type": "Mixed"
      },
      "COMPRESSED_TEXTURE_FORMATS": {},
      "CONSTANT_ALPHA": {
        "type": "Mixed"
      },
      "CONSTANT_COLOR": {
        "type": "Mixed"
      },
      "CONTEXT_LOST_WEBGL": {
        "type": "Mixed"
      },
      "CULL_FACE": {
        "type": "Boolean"
      },
      "CULL_FACE_MODE": {
        "type": "Number"
      },
      "CURRENT_PROGRAM": {
        "type": "Mixed"
      },
      "CURRENT_VERTEX_ATTRIB": {
        "type": "Mixed"
      },
      "CW": {
        "type": "Mixed"
      },
      "DECR": {
        "type": "Mixed"
      },
      "DECR_WRAP": {
        "type": "Mixed"
      },
      "DELETE_STATUS": {
        "type": "Mixed"
      },
      "DEPTH_ATTACHMENT": {
        "type": "Mixed"
      },
      "DEPTH_BITS": {
        "type": "Number"
      },
      "DEPTH_BUFFER_BIT": {
        "type": "Mixed"
      },
      "DEPTH_CLEAR_VALUE": {
        "type": "Number"
      },
      "DEPTH_COMPONENT": {
        "type": "Mixed"
      },
      "DEPTH_COMPONENT16": {
        "type": "Mixed"
      },
      "DEPTH_FUNC": {
        "type": "Number"
      },
      "DEPTH_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "DEPTH_STENCIL": {
        "type": "Mixed"
      },
      "DEPTH_STENCIL_ATTACHMENT": {
        "type": "Mixed"
      },
      "DEPTH_TEST": {
        "type": "Boolean"
      },
      "DEPTH_WRITEMASK": {
        "type": "Boolean"
      },
      "DITHER": {
        "type": "Boolean"
      },
      "DONT_CARE": {
        "type": "Mixed"
      },
      "DST_ALPHA": {
        "type": "Mixed"
      },
      "DST_COLOR": {
        "type": "Mixed"
      },
      "DYNAMIC_DRAW": {
        "type": "Mixed"
      },
      "ELEMENT_ARRAY_BUFFER": {
        "type": "Mixed"
      },
      "ELEMENT_ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "EQUAL": {
        "type": "Mixed"
      },
      "FASTEST": {
        "type": "Mixed"
      },
      "FLOAT": {
        "type": "Mixed"
      },
      "FLOAT_MAT2": {
        "type": "Mixed"
      },
      "FLOAT_MAT3": {
        "type": "Mixed"
      },
      "FLOAT_MAT4": {
        "type": "Mixed"
      },
      "FLOAT_VEC2": {
        "type": "Mixed"
      },
      "FLOAT_VEC3": {
        "type": "Mixed"
      },
      "FLOAT_VEC4": {
        "type": "Mixed"
      },
      "FRAGMENT_SHADER": {
        "type": "Mixed"
      },
      "FRAMEBUFFER": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_BINDING": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_COMPLETE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_ATTACHMENT": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_DIMENSIONS": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_UNSUPPORTED": {
        "type": "Mixed"
      },
      "FRONT": {
        "type": "Mixed"
      },
      "FRONT_AND_BACK": {
        "type": "Mixed"
      },
      "FRONT_FACE": {
        "type": "Number"
      },
      "FUNC_ADD": {
        "type": "Mixed"
      },
      "FUNC_REVERSE_SUBTRACT": {
        "type": "Mixed"
      },
      "FUNC_SUBTRACT": {
        "type": "Mixed"
      },
      "GENERATE_MIPMAP_HINT": {
        "type": "Number"
      },
      "GEQUAL": {
        "type": "Mixed"
      },
      "GREATER": {
        "type": "Mixed"
      },
      "GREEN_BITS": {
        "type": "Number"
      },
      "HIGH_FLOAT": {
        "type": "Mixed"
      },
      "HIGH_INT": {
        "type": "Mixed"
      },
      "IMPLEMENTATION_COLOR_READ_FORMAT": {
        "type": "Number"
      },
      "IMPLEMENTATION_COLOR_READ_TYPE": {
        "type": "Number"
      },
      "INCR": {
        "type": "Mixed"
      },
      "INCR_WRAP": {
        "type": "Mixed"
      },
      "INT": {
        "type": "Mixed"
      },
      "INT_VEC2": {
        "type": "Mixed"
      },
      "INT_VEC3": {
        "type": "Mixed"
      },
      "INT_VEC4": {
        "type": "Mixed"
      },
      "INVALID_ENUM": {
        "type": "Mixed"
      },
      "INVALID_FRAMEBUFFER_OPERATION": {
        "type": "Mixed"
      },
      "INVALID_OPERATION": {
        "type": "Mixed"
      },
      "INVALID_VALUE": {
        "type": "Mixed"
      },
      "INVERT": {
        "type": "Mixed"
      },
      "KEEP": {
        "type": "Mixed"
      },
      "LEQUAL": {
        "type": "Mixed"
      },
      "LESS": {
        "type": "Mixed"
      },
      "LINEAR": {
        "type": "Mixed"
      },
      "LINEAR_MIPMAP_LINEAR": {
        "type": "Mixed"
      },
      "LINEAR_MIPMAP_NEAREST": {
        "type": "Mixed"
      },
      "LINES": {
        "type": "Mixed"
      },
      "LINE_LOOP": {
        "type": "Mixed"
      },
      "LINE_STRIP": {
        "type": "Mixed"
      },
      "LINE_WIDTH": {
        "type": "Number"
      },
      "LINK_STATUS": {
        "type": "Mixed"
      },
      "LOW_FLOAT": {
        "type": "Mixed"
      },
      "LOW_INT": {
        "type": "Mixed"
      },
      "LUMINANCE": {
        "type": "Mixed"
      },
      "LUMINANCE_ALPHA": {
        "type": "Mixed"
      },
      "MAX_COMBINED_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_CUBE_MAP_TEXTURE_SIZE": {
        "type": "Number"
      },
      "MAX_FRAGMENT_UNIFORM_VECTORS": {
        "type": "Number"
      },
      "MAX_RENDERBUFFER_SIZE": {
        "type": "Number"
      },
      "MAX_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_TEXTURE_SIZE": {
        "type": "Number"
      },
      "MAX_VARYING_VECTORS": {
        "type": "Number"
      },
      "MAX_VERTEX_ATTRIBS": {
        "type": "Number"
      },
      "MAX_VERTEX_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_VERTEX_UNIFORM_VECTORS": {
        "type": "Number"
      },
      "MAX_VIEWPORT_DIMS": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "MEDIUM_FLOAT": {
        "type": "Mixed"
      },
      "MEDIUM_INT": {
        "type": "Mixed"
      },
      "MIRRORED_REPEAT": {
        "type": "Mixed"
      },
      "NEAREST": {
        "type": "Mixed"
      },
      "NEAREST_MIPMAP_LINEAR": {
        "type": "Mixed"
      },
      "NEAREST_MIPMAP_NEAREST": {
        "type": "Mixed"
      },
      "NEVER": {
        "type": "Mixed"
      },
      "NICEST": {
        "type": "Mixed"
      },
      "NONE": {
        "type": "Mixed"
      },
      "NOTEQUAL": {
        "type": "Mixed"
      },
      "NO_ERROR": {
        "type": "Mixed"
      },
      "ONE": {
        "type": "Mixed"
      },
      "ONE_MINUS_CONSTANT_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_CONSTANT_COLOR": {
        "type": "Mixed"
      },
      "ONE_MINUS_DST_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_DST_COLOR": {
        "type": "Mixed"
      },
      "ONE_MINUS_SRC_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_SRC_COLOR": {
        "type": "Mixed"
      },
      "OUT_OF_MEMORY": {
        "type": "Mixed"
      },
      "PACK_ALIGNMENT": {
        "type": "Number"
      },
      "POINTS": {
        "type": "Mixed"
      },
      "POLYGON_OFFSET_FACTOR": {
        "type": "Number"
      },
      "POLYGON_OFFSET_FILL": {
        "type": "Boolean"
      },
      "POLYGON_OFFSET_UNITS": {
        "type": "Number"
      },
      "RED_BITS": {
        "type": "Number"
      },
      "RENDERBUFFER": {
        "type": "Mixed"
      },
      "RENDERBUFFER_ALPHA_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_BINDING": {
        "type": "Mixed"
      },
      "RENDERBUFFER_BLUE_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_DEPTH_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_GREEN_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_HEIGHT": {
        "type": "Mixed"
      },
      "RENDERBUFFER_INTERNAL_FORMAT": {
        "type": "Mixed"
      },
      "RENDERBUFFER_RED_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_STENCIL_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_WIDTH": {
        "type": "Mixed"
      },
      "RENDERER": {
        "type": "String"
      },
      "REPEAT": {
        "type": "Mixed"
      },
      "REPLACE": {
        "type": "Mixed"
      },
      "RGB": {
        "type": "Mixed"
      },
      "RGB5_A1": {
        "type": "Mixed"
      },
      "RGB565": {
        "type": "Mixed"
      },
      "RGBA": {
        "type": "Mixed"
      },
      "RGBA4": {
        "type": "Mixed"
      },
      "SAMPLER_2D": {
        "type": "Mixed"
      },
      "SAMPLER_CUBE": {
        "type": "Mixed"
      },
      "SAMPLES": {
        "type": "Number"
      },
      "SAMPLE_ALPHA_TO_COVERAGE": {
        "type": "Boolean"
      },
      "SAMPLE_BUFFERS": {
        "type": "Number"
      },
      "SAMPLE_COVERAGE": {
        "type": "Boolean"
      },
      "SAMPLE_COVERAGE_INVERT": {
        "type": "Boolean"
      },
      "SAMPLE_COVERAGE_VALUE": {
        "type": "Number"
      },
      "SCISSOR_BOX": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "SCISSOR_TEST": {
        "type": "Boolean"
      },
      "SHADER_TYPE": {
        "type": "Mixed"
      },
      "SHADING_LANGUAGE_VERSION": {
        "type": "String"
      },
      "SHORT": {
        "type": "Mixed"
      },
      "SRC_ALPHA": {
        "type": "Mixed"
      },
      "SRC_ALPHA_SATURATE": {
        "type": "Mixed"
      },
      "SRC_COLOR": {
        "type": "Mixed"
      },
      "STATIC_DRAW": {
        "type": "Mixed"
      },
      "STENCIL_ATTACHMENT": {
        "type": "Mixed"
      },
      "STENCIL_BACK_FAIL": {
        "type": "Number"
      },
      "STENCIL_BACK_FUNC": {
        "type": "Number"
      },
      "STENCIL_BACK_PASS_DEPTH_FAIL": {
        "type": "Number"
      },
      "STENCIL_BACK_PASS_DEPTH_PASS": {
        "type": "Number"
      },
      "STENCIL_BACK_REF": {
        "type": "Number"
      },
      "STENCIL_BACK_VALUE_MASK": {
        "type": "Number"
      },
      "STENCIL_BACK_WRITEMASK": {
        "type": "Number"
      },
      "STENCIL_BITS": {
        "type": "Number"
      },
      "STENCIL_BUFFER_BIT": {
        "type": "Mixed"
      },
      "STENCIL_CLEAR_VALUE": {
        "type": "Number"
      },
      "STENCIL_FAIL": {
        "type": "Number"
      },
      "STENCIL_FUNC": {
        "type": "Number"
      },
      "STENCIL_INDEX8": {
        "type": "Mixed"
      },
      "STENCIL_PASS_DEPTH_FAIL": {
        "type": "Number"
      },
      "STENCIL_PASS_DEPTH_PASS": {
        "type": "Number"
      },
      "STENCIL_REF": {
        "type": "Number"
      },
      "STENCIL_TEST": {
        "type": "Boolean"
      },
      "STENCIL_VALUE_MASK": {
        "type": "Number"
      },
      "STENCIL_WRITEMASK": {
        "type": "Number"
      },
      "STREAM_DRAW": {
        "type": "Mixed"
      },
      "SUBPIXEL_BITS": {
        "type": "Number"
      },
      "TEXTURE": {
        "type": "Mixed"
      },
      "TEXTURE0": {
        "type": "Mixed"
      },
      "TEXTURE1": {
        "type": "Mixed"
      },
      "TEXTURE2": {
        "type": "Mixed"
      },
      "TEXTURE3": {
        "type": "Mixed"
      },
      "TEXTURE4": {
        "type": "Mixed"
      },
      "TEXTURE5": {
        "type": "Mixed"
      },
      "TEXTURE6": {
        "type": "Mixed"
      },
      "TEXTURE7": {
        "type": "Mixed"
      },
      "TEXTURE8": {
        "type": "Mixed"
      },
      "TEXTURE9": {
        "type": "Mixed"
      },
      "TEXTURE10": {
        "type": "Mixed"
      },
      "TEXTURE11": {
        "type": "Mixed"
      },
      "TEXTURE12": {
        "type": "Mixed"
      },
      "TEXTURE13": {
        "type": "Mixed"
      },
      "TEXTURE14": {
        "type": "Mixed"
      },
      "TEXTURE15": {
        "type": "Mixed"
      },
      "TEXTURE16": {
        "type": "Mixed"
      },
      "TEXTURE17": {
        "type": "Mixed"
      },
      "TEXTURE18": {
        "type": "Mixed"
      },
      "TEXTURE19": {
        "type": "Mixed"
      },
      "TEXTURE20": {
        "type": "Mixed"
      },
      "TEXTURE21": {
        "type": "Mixed"
      },
      "TEXTURE22": {
        "type": "Mixed"
      },
      "TEXTURE23": {
        "type": "Mixed"
      },
      "TEXTURE24": {
        "type": "Mixed"
      },
      "TEXTURE25": {
        "type": "Mixed"
      },
      "TEXTURE26": {
        "type": "Mixed"
      },
      "TEXTURE27": {
        "type": "Mixed"
      },
      "TEXTURE28": {
        "type": "Mixed"
      },
      "TEXTURE29": {
        "type": "Mixed"
      },
      "TEXTURE30": {
        "type": "Mixed"
      },
      "TEXTURE31": {
        "type": "Mixed"
      },
      "TEXTURE_2D": {
        "type": "Mixed"
      },
      "TEXTURE_BINDING_2D": {
        "type": "Mixed"
      },
      "TEXTURE_BINDING_CUBE_MAP": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_X": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_Y": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_Z": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_X": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_Y": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_Z": {
        "type": "Mixed"
      },
      "TEXTURE_MAG_FILTER": {
        "type": "Mixed"
      },
      "TEXTURE_MIN_FILTER": {
        "type": "Mixed"
      },
      "TEXTURE_WRAP_S": {
        "type": "Mixed"
      },
      "TEXTURE_WRAP_T": {
        "type": "Mixed"
      },
      "TRIANGLES": {
        "type": "Mixed"
      },
      "TRIANGLE_FAN": {
        "type": "Mixed"
      },
      "TRIANGLE_STRIP": {
        "type": "Mixed"
      },
      "UNPACK_ALIGNMENT": {
        "type": "Number"
      },
      "UNPACK_COLORSPACE_CONVERSION_WEBGL": {
        "type": "Number"
      },
      "UNPACK_FLIP_Y_WEBGL": {
        "type": "Boolean"
      },
      "UNPACK_PREMULTIPLY_ALPHA_WEBGL": {
        "type": "Boolean"
      },
      "UNSIGNED_BYTE": {
        "type": "Mixed"
      },
      "UNSIGNED_INT": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_4_4_4_4": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_5_5_5_1": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_5_6_5": {
        "type": "Mixed"
      },
      "VALIDATE_STATUS": {
        "type": "Mixed"
      },
      "VENDOR": {
        "type": "String"
      },
      "VERSION": {
        "type": "String"
      },
      "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_ENABLED": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_NORMALIZED": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_POINTER": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_SIZE": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_STRIDE": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_TYPE": {
        "type": "Mixed"
      },
      "VERTEX_SHADER": {
        "type": "Mixed"
      },
      "VIEWPORT": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "ZERO": {
        "type": "Mixed"
      },
      "EXTENSIONS": {
        "ANGLE_instanced_arrays": {
          "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE": {
            "type": "Mixed"
          },
          "drawArraysInstancedANGLE": {
            "type": "Mixed"
          },
          "drawElementsInstancedANGLE": {
            "type": "Mixed"
          },
          "vertexAttribDivisorANGLE": {
            "type": "Mixed"
          }
        },
        "EXT_blend_minmax": {
          "MIN_EXT": {
            "type": "Mixed"
          },
          "MAX_EXT": {
            "type": "Mixed"
          }
        },
        "EXT_disjoint_timer_query": {
          "QUERY_COUNTER_BITS_EXT": {
            "type": "Mixed"
          },
          "CURRENT_QUERY_EXT": {
            "type": "Mixed"
          },
          "QUERY_RESULT_EXT": {
            "type": "Mixed"
          },
          "QUERY_RESULT_AVAILABLE_EXT": {
            "type": "Mixed"
          },
          "TIME_ELAPSED_EXT": {
            "type": "Mixed"
          },
          "TIMESTAMP_EXT": {
            "type": "Number"
          },
          "GPU_DISJOINT_EXT": {
            "type": "Boolean"
          },
          "createQueryEXT": {
            "type": "Mixed"
          },
          "deleteQueryEXT": {
            "type": "Mixed"
          },
          "isQueryEXT": {
            "type": "Mixed"
          },
          "beginQueryEXT": {
            "type": "Mixed"
          },
          "endQueryEXT": {
            "type": "Mixed"
          },
          "queryCounterEXT": {
            "type": "Mixed"
          },
          "getQueryEXT": {
            "type": "Mixed"
          },
          "getQueryObjectEXT": {
            "type": "Mixed"
          }
        },
        "EXT_texture_filter_anisotropic": {
          "TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Mixed"
          },
          "MAX_TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Number"
          }
        },
        "WEBKIT_EXT_texture_filter_anisotropic": {
          "TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Mixed"
          },
          "MAX_TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Number"
          }
        },
        "EXT_sRGB": {
          "SRGB_EXT": {
            "type": "Mixed"
          },
          "SRGB_ALPHA_EXT": {
            "type": "Mixed"
          },
          "SRGB8_ALPHA8_EXT": {
            "type": "Mixed"
          },
          "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT": {
            "type": "Mixed"
          }
        },
        "OES_standard_derivatives": {
          "FRAGMENT_SHADER_DERIVATIVE_HINT_OES": {
            "type": "Number"
          }
        },
        "OES_texture_half_float": {
          "HALF_FLOAT_OES": {
            "type": "Mixed"
          }
        },
        "OES_vertex_array_object": {
          "VERTEX_ARRAY_BINDING_OES": {
            "type": "Mixed"
          },
          "createVertexArrayOES": {
            "type": "Mixed"
          },
          "deleteVertexArrayOES": {
            "type": "Mixed"
          },
          "isVertexArrayOES": {
            "type": "Mixed"
          },
          "bindVertexArrayOES": {
            "type": "Mixed"
          }
        },
        "WEBGL_compressed_texture_astc": {
          "COMPRESSED_RGBA_ASTC_4x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_5x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_5x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_6x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_6x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_12x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_12x12_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR": {
            "type": "Mixed"
          }
        },
        "WEBGL_compressed_texture_s3tc": {
          "COMPRESSED_RGB_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT3_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT5_EXT": {
            "type": "Mixed"
          }
        },
        "WEBKIT_WEBGL_compressed_texture_s3tc": {
          "COMPRESSED_RGB_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT3_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT5_EXT": {
            "type": "Mixed"
          }
        },
        "WEBGL_compressed_texture_s3tc_srgb": {
          "COMPRESSED_SRGB_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT": {
            "type": "Mixed"
          }
        },
        "WEBGL_debug_renderer_info": {
          "UNMASKED_VENDOR_WEBGL": {
            "type": "String"
          },
          "UNMASKED_RENDERER_WEBGL": {
            "type": "String"
          }
        },
        "WEBGL_debug_shaders": {
          "getTranslatedShaderSource": {
            "type": "Mixed"
          }
        },
        "WEBGL_depth_texture": {
          "UNSIGNED_INT_24_8_WEBGL": {
            "type": "Mixed"
          }
        },
        "WEBKIT_WEBGL_depth_texture": {
          "UNSIGNED_INT_24_8_WEBGL": {
            "type": "Mixed"
          }
        },
        "WEBGL_draw_buffers": {
          "COLOR_ATTACHMENT0_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT1_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT2_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT3_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT4_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT5_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT6_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT7_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT8_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT9_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT10_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT11_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT12_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT13_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT14_WEBGL": {
            "type": "Mixed"
          },
          "COLOR_ATTACHMENT15_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER0_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER1_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER2_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER3_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER4_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER5_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER6_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER7_WEBGL": {
            "type": "Number"
          },
          "DRAW_BUFFER8_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER9_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER10_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER11_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER12_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER13_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER14_WEBGL": {
            "type": "Mixed"
          },
          "DRAW_BUFFER15_WEBGL": {
            "type": "Mixed"
          },
          "MAX_COLOR_ATTACHMENTS_WEBGL": {
            "type": "Number"
          },
          "MAX_DRAW_BUFFERS_WEBGL": {
            "type": "Number"
          },
          "drawBuffersWEBGL": {
            "type": "Mixed"
          }
        },
        "WEBGL_lose_context": {
          "loseContext": {
            "type": "Mixed"
          },
          "restoreContext": {
            "type": "Mixed"
          }
        },
        "WEBKIT_WEBGL_lose_context": {
          "loseContext": {
            "type": "Mixed"
          },
          "restoreContext": {
            "type": "Mixed"
          }
        }
      }
    },
    "webgl2": {
      "ACTIVE_ATTRIBUTES": {
        "type": "Mixed"
      },
      "ACTIVE_TEXTURE": {
        "type": "Number"
      },
      "ACTIVE_UNIFORMS": {
        "type": "Mixed"
      },
      "ALIASED_LINE_WIDTH_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "ALIASED_POINT_SIZE_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "ALPHA": {
        "type": "Mixed"
      },
      "ALPHA_BITS": {
        "type": "Number"
      },
      "ALWAYS": {
        "type": "Mixed"
      },
      "ARRAY_BUFFER": {
        "type": "Mixed"
      },
      "ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "ATTACHED_SHADERS": {
        "type": "Mixed"
      },
      "BACK": {
        "type": "Mixed"
      },
      "BLEND": {
        "type": "Boolean"
      },
      "BLEND_COLOR": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "BLEND_DST_ALPHA": {
        "type": "Number"
      },
      "BLEND_DST_RGB": {
        "type": "Number"
      },
      "BLEND_EQUATION": {
        "type": "Number"
      },
      "BLEND_EQUATION_ALPHA": {
        "type": "Number"
      },
      "BLEND_EQUATION_RGB": {
        "type": "Number"
      },
      "BLEND_SRC_ALPHA": {
        "type": "Number"
      },
      "BLEND_SRC_RGB": {
        "type": "Number"
      },
      "BLUE_BITS": {
        "type": "Number"
      },
      "BOOL": {
        "type": "Mixed"
      },
      "BOOL_VEC2": {
        "type": "Mixed"
      },
      "BOOL_VEC3": {
        "type": "Mixed"
      },
      "BOOL_VEC4": {
        "type": "Mixed"
      },
      "BROWSER_DEFAULT_WEBGL": {
        "type": "Mixed"
      },
      "BUFFER_SIZE": {
        "type": "Mixed"
      },
      "BUFFER_USAGE": {
        "type": "Mixed"
      },
      "BYTE": {
        "type": "Mixed"
      },
      "CCW": {
        "type": "Mixed"
      },
      "CLAMP_TO_EDGE": {
        "type": "Mixed"
      },
      "COLOR_ATTACHMENT0": {
        "type": "Mixed"
      },
      "COLOR_BUFFER_BIT": {
        "type": "Mixed"
      },
      "COLOR_CLEAR_VALUE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "COLOR_WRITEMASK": {
        "type": ["Boolean"],
        default: undefined
      },
      "COMPILE_STATUS": {
        "type": "Mixed"
      },
      "COMPRESSED_TEXTURE_FORMATS": {},
      "CONSTANT_ALPHA": {
        "type": "Mixed"
      },
      "CONSTANT_COLOR": {
        "type": "Mixed"
      },
      "CONTEXT_LOST_WEBGL": {
        "type": "Mixed"
      },
      "CULL_FACE": {
        "type": "Boolean"
      },
      "CULL_FACE_MODE": {
        "type": "Number"
      },
      "CURRENT_PROGRAM": {
        "type": "Mixed"
      },
      "CURRENT_VERTEX_ATTRIB": {
        "type": "Mixed"
      },
      "CW": {
        "type": "Mixed"
      },
      "DECR": {
        "type": "Mixed"
      },
      "DECR_WRAP": {
        "type": "Mixed"
      },
      "DELETE_STATUS": {
        "type": "Mixed"
      },
      "DEPTH_ATTACHMENT": {
        "type": "Mixed"
      },
      "DEPTH_BITS": {
        "type": "Number"
      },
      "DEPTH_BUFFER_BIT": {
        "type": "Mixed"
      },
      "DEPTH_CLEAR_VALUE": {
        "type": "Number"
      },
      "DEPTH_COMPONENT": {
        "type": "Mixed"
      },
      "DEPTH_COMPONENT16": {
        "type": "Mixed"
      },
      "DEPTH_FUNC": {
        "type": "Number"
      },
      "DEPTH_RANGE": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "DEPTH_STENCIL": {
        "type": "Mixed"
      },
      "DEPTH_STENCIL_ATTACHMENT": {
        "type": "Mixed"
      },
      "DEPTH_TEST": {
        "type": "Boolean"
      },
      "DEPTH_WRITEMASK": {
        "type": "Boolean"
      },
      "DITHER": {
        "type": "Boolean"
      },
      "DONT_CARE": {
        "type": "Mixed"
      },
      "DST_ALPHA": {
        "type": "Mixed"
      },
      "DST_COLOR": {
        "type": "Mixed"
      },
      "DYNAMIC_DRAW": {
        "type": "Mixed"
      },
      "ELEMENT_ARRAY_BUFFER": {
        "type": "Mixed"
      },
      "ELEMENT_ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "EQUAL": {
        "type": "Mixed"
      },
      "FASTEST": {
        "type": "Mixed"
      },
      "FLOAT": {
        "type": "Mixed"
      },
      "FLOAT_MAT2": {
        "type": "Mixed"
      },
      "FLOAT_MAT3": {
        "type": "Mixed"
      },
      "FLOAT_MAT4": {
        "type": "Mixed"
      },
      "FLOAT_VEC2": {
        "type": "Mixed"
      },
      "FLOAT_VEC3": {
        "type": "Mixed"
      },
      "FLOAT_VEC4": {
        "type": "Mixed"
      },
      "FRAGMENT_SHADER": {
        "type": "Mixed"
      },
      "FRAMEBUFFER": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_BINDING": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_COMPLETE": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_ATTACHMENT": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_DIMENSIONS": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT": {
        "type": "Mixed"
      },
      "FRAMEBUFFER_UNSUPPORTED": {
        "type": "Mixed"
      },
      "FRONT": {
        "type": "Mixed"
      },
      "FRONT_AND_BACK": {
        "type": "Mixed"
      },
      "FRONT_FACE": {
        "type": "Number"
      },
      "FUNC_ADD": {
        "type": "Mixed"
      },
      "FUNC_REVERSE_SUBTRACT": {
        "type": "Mixed"
      },
      "FUNC_SUBTRACT": {
        "type": "Mixed"
      },
      "GENERATE_MIPMAP_HINT": {
        "type": "Number"
      },
      "GEQUAL": {
        "type": "Mixed"
      },
      "GREATER": {
        "type": "Mixed"
      },
      "GREEN_BITS": {
        "type": "Number"
      },
      "HIGH_FLOAT": {
        "type": "Mixed"
      },
      "HIGH_INT": {
        "type": "Mixed"
      },
      "IMPLEMENTATION_COLOR_READ_FORMAT": {
        "type": "Number"
      },
      "IMPLEMENTATION_COLOR_READ_TYPE": {
        "type": "Number"
      },
      "INCR": {
        "type": "Mixed"
      },
      "INCR_WRAP": {
        "type": "Mixed"
      },
      "INT": {
        "type": "Mixed"
      },
      "INT_VEC2": {
        "type": "Mixed"
      },
      "INT_VEC3": {
        "type": "Mixed"
      },
      "INT_VEC4": {
        "type": "Mixed"
      },
      "INVALID_ENUM": {
        "type": "Mixed"
      },
      "INVALID_FRAMEBUFFER_OPERATION": {
        "type": "Mixed"
      },
      "INVALID_OPERATION": {
        "type": "Mixed"
      },
      "INVALID_VALUE": {
        "type": "Mixed"
      },
      "INVERT": {
        "type": "Mixed"
      },
      "KEEP": {
        "type": "Mixed"
      },
      "LEQUAL": {
        "type": "Mixed"
      },
      "LESS": {
        "type": "Mixed"
      },
      "LINEAR": {
        "type": "Mixed"
      },
      "LINEAR_MIPMAP_LINEAR": {
        "type": "Mixed"
      },
      "LINEAR_MIPMAP_NEAREST": {
        "type": "Mixed"
      },
      "LINES": {
        "type": "Mixed"
      },
      "LINE_LOOP": {
        "type": "Mixed"
      },
      "LINE_STRIP": {
        "type": "Mixed"
      },
      "LINE_WIDTH": {
        "type": "Number"
      },
      "LINK_STATUS": {
        "type": "Mixed"
      },
      "LOW_FLOAT": {
        "type": "Mixed"
      },
      "LOW_INT": {
        "type": "Mixed"
      },
      "LUMINANCE": {
        "type": "Mixed"
      },
      "LUMINANCE_ALPHA": {
        "type": "Mixed"
      },
      "MAX_COMBINED_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_CUBE_MAP_TEXTURE_SIZE": {
        "type": "Number"
      },
      "MAX_FRAGMENT_UNIFORM_VECTORS": {
        "type": "Number"
      },
      "MAX_RENDERBUFFER_SIZE": {
        "type": "Number"
      },
      "MAX_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_TEXTURE_SIZE": {
        "type": "Number"
      },
      "MAX_VARYING_VECTORS": {
        "type": "Number"
      },
      "MAX_VERTEX_ATTRIBS": {
        "type": "Number"
      },
      "MAX_VERTEX_TEXTURE_IMAGE_UNITS": {
        "type": "Number"
      },
      "MAX_VERTEX_UNIFORM_VECTORS": {
        "type": "Number"
      },
      "MAX_VIEWPORT_DIMS": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        }
      },
      "MEDIUM_FLOAT": {
        "type": "Mixed"
      },
      "MEDIUM_INT": {
        "type": "Mixed"
      },
      "MIRRORED_REPEAT": {
        "type": "Mixed"
      },
      "NEAREST": {
        "type": "Mixed"
      },
      "NEAREST_MIPMAP_LINEAR": {
        "type": "Mixed"
      },
      "NEAREST_MIPMAP_NEAREST": {
        "type": "Mixed"
      },
      "NEVER": {
        "type": "Mixed"
      },
      "NICEST": {
        "type": "Mixed"
      },
      "NONE": {
        "type": "Mixed"
      },
      "NOTEQUAL": {
        "type": "Mixed"
      },
      "NO_ERROR": {
        "type": "Mixed"
      },
      "ONE": {
        "type": "Mixed"
      },
      "ONE_MINUS_CONSTANT_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_CONSTANT_COLOR": {
        "type": "Mixed"
      },
      "ONE_MINUS_DST_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_DST_COLOR": {
        "type": "Mixed"
      },
      "ONE_MINUS_SRC_ALPHA": {
        "type": "Mixed"
      },
      "ONE_MINUS_SRC_COLOR": {
        "type": "Mixed"
      },
      "OUT_OF_MEMORY": {
        "type": "Mixed"
      },
      "PACK_ALIGNMENT": {
        "type": "Number"
      },
      "POINTS": {
        "type": "Mixed"
      },
      "POLYGON_OFFSET_FACTOR": {
        "type": "Number"
      },
      "POLYGON_OFFSET_FILL": {
        "type": "Boolean"
      },
      "POLYGON_OFFSET_UNITS": {
        "type": "Number"
      },
      "RED_BITS": {
        "type": "Number"
      },
      "RENDERBUFFER": {
        "type": "Mixed"
      },
      "RENDERBUFFER_ALPHA_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_BINDING": {
        "type": "Mixed"
      },
      "RENDERBUFFER_BLUE_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_DEPTH_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_GREEN_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_HEIGHT": {
        "type": "Mixed"
      },
      "RENDERBUFFER_INTERNAL_FORMAT": {
        "type": "Mixed"
      },
      "RENDERBUFFER_RED_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_STENCIL_SIZE": {
        "type": "Mixed"
      },
      "RENDERBUFFER_WIDTH": {
        "type": "Mixed"
      },
      "RENDERER": {
        "type": "String"
      },
      "REPEAT": {
        "type": "Mixed"
      },
      "REPLACE": {
        "type": "Mixed"
      },
      "RGB": {
        "type": "Mixed"
      },
      "RGB5_A1": {
        "type": "Mixed"
      },
      "RGB565": {
        "type": "Mixed"
      },
      "RGBA": {
        "type": "Mixed"
      },
      "RGBA4": {
        "type": "Mixed"
      },
      "SAMPLER_2D": {
        "type": "Mixed"
      },
      "SAMPLER_CUBE": {
        "type": "Mixed"
      },
      "SAMPLES": {
        "type": "Number"
      },
      "SAMPLE_ALPHA_TO_COVERAGE": {
        "type": "Boolean"
      },
      "SAMPLE_BUFFERS": {
        "type": "Number"
      },
      "SAMPLE_COVERAGE": {
        "type": "Boolean"
      },
      "SAMPLE_COVERAGE_INVERT": {
        "type": "Boolean"
      },
      "SAMPLE_COVERAGE_VALUE": {
        "type": "Number"
      },
      "SCISSOR_BOX": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "SCISSOR_TEST": {
        "type": "Boolean"
      },
      "SHADER_TYPE": {
        "type": "Mixed"
      },
      "SHADING_LANGUAGE_VERSION": {
        "type": "String"
      },
      "SHORT": {
        "type": "Mixed"
      },
      "SRC_ALPHA": {
        "type": "Mixed"
      },
      "SRC_ALPHA_SATURATE": {
        "type": "Mixed"
      },
      "SRC_COLOR": {
        "type": "Mixed"
      },
      "STATIC_DRAW": {
        "type": "Mixed"
      },
      "STENCIL_ATTACHMENT": {
        "type": "Mixed"
      },
      "STENCIL_BACK_FAIL": {
        "type": "Number"
      },
      "STENCIL_BACK_FUNC": {
        "type": "Number"
      },
      "STENCIL_BACK_PASS_DEPTH_FAIL": {
        "type": "Number"
      },
      "STENCIL_BACK_PASS_DEPTH_PASS": {
        "type": "Number"
      },
      "STENCIL_BACK_REF": {
        "type": "Number"
      },
      "STENCIL_BACK_VALUE_MASK": {
        "type": "Number"
      },
      "STENCIL_BACK_WRITEMASK": {
        "type": "Number"
      },
      "STENCIL_BITS": {
        "type": "Number"
      },
      "STENCIL_BUFFER_BIT": {
        "type": "Mixed"
      },
      "STENCIL_CLEAR_VALUE": {
        "type": "Number"
      },
      "STENCIL_FAIL": {
        "type": "Number"
      },
      "STENCIL_FUNC": {
        "type": "Number"
      },
      "STENCIL_INDEX8": {
        "type": "Mixed"
      },
      "STENCIL_PASS_DEPTH_FAIL": {
        "type": "Number"
      },
      "STENCIL_PASS_DEPTH_PASS": {
        "type": "Number"
      },
      "STENCIL_REF": {
        "type": "Number"
      },
      "STENCIL_TEST": {
        "type": "Boolean"
      },
      "STENCIL_VALUE_MASK": {
        "type": "Number"
      },
      "STENCIL_WRITEMASK": {
        "type": "Number"
      },
      "STREAM_DRAW": {
        "type": "Mixed"
      },
      "SUBPIXEL_BITS": {
        "type": "Number"
      },
      "TEXTURE": {
        "type": "Mixed"
      },
      "TEXTURE0": {
        "type": "Mixed"
      },
      "TEXTURE1": {
        "type": "Mixed"
      },
      "TEXTURE2": {
        "type": "Mixed"
      },
      "TEXTURE3": {
        "type": "Mixed"
      },
      "TEXTURE4": {
        "type": "Mixed"
      },
      "TEXTURE5": {
        "type": "Mixed"
      },
      "TEXTURE6": {
        "type": "Mixed"
      },
      "TEXTURE7": {
        "type": "Mixed"
      },
      "TEXTURE8": {
        "type": "Mixed"
      },
      "TEXTURE9": {
        "type": "Mixed"
      },
      "TEXTURE10": {
        "type": "Mixed"
      },
      "TEXTURE11": {
        "type": "Mixed"
      },
      "TEXTURE12": {
        "type": "Mixed"
      },
      "TEXTURE13": {
        "type": "Mixed"
      },
      "TEXTURE14": {
        "type": "Mixed"
      },
      "TEXTURE15": {
        "type": "Mixed"
      },
      "TEXTURE16": {
        "type": "Mixed"
      },
      "TEXTURE17": {
        "type": "Mixed"
      },
      "TEXTURE18": {
        "type": "Mixed"
      },
      "TEXTURE19": {
        "type": "Mixed"
      },
      "TEXTURE20": {
        "type": "Mixed"
      },
      "TEXTURE21": {
        "type": "Mixed"
      },
      "TEXTURE22": {
        "type": "Mixed"
      },
      "TEXTURE23": {
        "type": "Mixed"
      },
      "TEXTURE24": {
        "type": "Mixed"
      },
      "TEXTURE25": {
        "type": "Mixed"
      },
      "TEXTURE26": {
        "type": "Mixed"
      },
      "TEXTURE27": {
        "type": "Mixed"
      },
      "TEXTURE28": {
        "type": "Mixed"
      },
      "TEXTURE29": {
        "type": "Mixed"
      },
      "TEXTURE30": {
        "type": "Mixed"
      },
      "TEXTURE31": {
        "type": "Mixed"
      },
      "TEXTURE_2D": {
        "type": "Mixed"
      },
      "TEXTURE_BINDING_2D": {
        "type": "Mixed"
      },
      "TEXTURE_BINDING_CUBE_MAP": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_X": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_Y": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_NEGATIVE_Z": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_X": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_Y": {
        "type": "Mixed"
      },
      "TEXTURE_CUBE_MAP_POSITIVE_Z": {
        "type": "Mixed"
      },
      "TEXTURE_MAG_FILTER": {
        "type": "Mixed"
      },
      "TEXTURE_MIN_FILTER": {
        "type": "Mixed"
      },
      "TEXTURE_WRAP_S": {
        "type": "Mixed"
      },
      "TEXTURE_WRAP_T": {
        "type": "Mixed"
      },
      "TRIANGLES": {
        "type": "Mixed"
      },
      "TRIANGLE_FAN": {
        "type": "Mixed"
      },
      "TRIANGLE_STRIP": {
        "type": "Mixed"
      },
      "UNPACK_ALIGNMENT": {
        "type": "Number"
      },
      "UNPACK_COLORSPACE_CONVERSION_WEBGL": {
        "type": "Number"
      },
      "UNPACK_FLIP_Y_WEBGL": {
        "type": "Boolean"
      },
      "UNPACK_PREMULTIPLY_ALPHA_WEBGL": {
        "type": "Boolean"
      },
      "UNSIGNED_BYTE": {
        "type": "Mixed"
      },
      "UNSIGNED_INT": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_4_4_4_4": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_5_5_5_1": {
        "type": "Mixed"
      },
      "UNSIGNED_SHORT_5_6_5": {
        "type": "Mixed"
      },
      "VALIDATE_STATUS": {
        "type": "Mixed"
      },
      "VENDOR": {
        "type": "String"
      },
      "VERSION": {
        "type": "String"
      },
      "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_ENABLED": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_NORMALIZED": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_POINTER": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_SIZE": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_STRIDE": {
        "type": "Mixed"
      },
      "VERTEX_ATTRIB_ARRAY_TYPE": {
        "type": "Mixed"
      },
      "VERTEX_SHADER": {
        "type": "Mixed"
      },
      "VIEWPORT": {
        "0": {
          "type": "Number"
        },
        "1": {
          "type": "Number"
        },
        "2": {
          "type": "Number"
        },
        "3": {
          "type": "Number"
        }
      },
      "ZERO": {
        "type": "Mixed"
      },
      "EXTENSIONS": {
        "EXT_disjoint_timer_query_webgl2": {
          "QUERY_COUNTER_BITS_EXT": {
            "type": "Mixed"
          },
          "TIME_ELAPSED_EXT": {
            "type": "Mixed"
          },
          "TIMESTAMP_EXT": {
            "type": "Number"
          },
          "GPU_DISJOINT_EXT": {
            "type": "Boolean"
          },
          "queryCounterEXT": {
            "type": "Mixed"
          }
        },
        "EXT_texture_filter_anisotropic": {
          "TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Mixed"
          },
          "MAX_TEXTURE_MAX_ANISOTROPY_EXT": {
            "type": "Number"
          }
        },
        "WEBGL_compressed_texture_astc": {
          "COMPRESSED_RGBA_ASTC_4x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_5x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_5x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_6x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_6x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_8x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_10x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_12x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_ASTC_12x12_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR": {
            "type": "Mixed"
          }
        },
        "WEBGL_compressed_texture_s3tc": {
          "COMPRESSED_RGB_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT3_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_RGBA_S3TC_DXT5_EXT": {
            "type": "Mixed"
          }
        },
        "WEBGL_compressed_texture_s3tc_srgb": {
          "COMPRESSED_SRGB_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT": {
            "type": "Mixed"
          },
          "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT": {
            "type": "Mixed"
          }
        },
        "WEBGL_debug_renderer_info": {
          "UNMASKED_VENDOR_WEBGL": {
            "type": "String"
          },
          "UNMASKED_RENDERER_WEBGL": {
            "type": "String"
          }
        },
        "WEBGL_debug_shaders": {
          "getTranslatedShaderSource": {
            "type": "Mixed"
          }
        },
        "WEBGL_lose_context": {
          "loseContext": {
            "type": "Mixed"
          },
          "restoreContext": {
            "type": "Mixed"
          }
        }
      }
    }
  },
  "fonts": {
    "js_fonts": {
      "type": [
        "String"
      ]
    }
  }
})

schema.methods.getHash = (body) => {
	body.navigator.connection = {}
	let hashObj = sha1(JSON.stringify(body))
	return hashObj
}

schema.virtual('body')
  .set(function(body) {
  	this.hash = this.getHash(body)
  })

module.exports = model('Fingerprint', schema)