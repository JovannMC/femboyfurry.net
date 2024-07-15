
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const siteTheme: CustomThemeConfig = {
    name: 'siteTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #FFAFCC 
		"--color-primary-50": "255 243 247", // #fff3f7
		"--color-primary-100": "255 239 245", // #ffeff5
		"--color-primary-200": "255 235 242", // #ffebf2
		"--color-primary-300": "255 223 235", // #ffdfeb
		"--color-primary-400": "255 199 219", // #ffc7db
		"--color-primary-500": "255 175 204", // #FFAFCC
		"--color-primary-600": "230 158 184", // #e69eb8
		"--color-primary-700": "191 131 153", // #bf8399
		"--color-primary-800": "153 105 122", // #99697a
		"--color-primary-900": "125 86 100", // #7d5664
		// secondary | #d9c2e6 
		"--color-secondary-50": "249 246 251", // #f9f6fb
		"--color-secondary-100": "247 243 250", // #f7f3fa
		"--color-secondary-200": "246 240 249", // #f6f0f9
		"--color-secondary-300": "240 231 245", // #f0e7f5
		"--color-secondary-400": "228 212 238", // #e4d4ee
		"--color-secondary-500": "217 194 230", // #d9c2e6
		"--color-secondary-600": "195 175 207", // #c3afcf
		"--color-secondary-700": "163 146 173", // #a392ad
		"--color-secondary-800": "130 116 138", // #82748a
		"--color-secondary-900": "106 95 113", // #6a5f71
		// tertiary | #FFC8DD 
		"--color-tertiary-50": "255 247 250", // #fff7fa
		"--color-tertiary-100": "255 244 248", // #fff4f8
		"--color-tertiary-200": "255 241 247", // #fff1f7
		"--color-tertiary-300": "255 233 241", // #ffe9f1
		"--color-tertiary-400": "255 217 231", // #ffd9e7
		"--color-tertiary-500": "255 200 221", // #FFC8DD
		"--color-tertiary-600": "230 180 199", // #e6b4c7
		"--color-tertiary-700": "191 150 166", // #bf96a6
		"--color-tertiary-800": "153 120 133", // #997885
		"--color-tertiary-900": "125 98 108", // #7d626c
		// success | #238ad6 
		"--color-success-50": "222 237 249", // #deedf9
		"--color-success-100": "211 232 247", // #d3e8f7
		"--color-success-200": "200 226 245", // #c8e2f5
		"--color-success-300": "167 208 239", // #a7d0ef
		"--color-success-400": "101 173 226", // #65ade2
		"--color-success-500": "35 138 214", // #238ad6
		"--color-success-600": "32 124 193", // #207cc1
		"--color-success-700": "26 104 161", // #1a68a1
		"--color-success-800": "21 83 128", // #155380
		"--color-success-900": "17 68 105", // #114469
		// warning | #fff833 
		"--color-warning-50": "255 254 224", // #fffee0
		"--color-warning-100": "255 254 214", // #fffed6
		"--color-warning-200": "255 253 204", // #fffdcc
		"--color-warning-300": "255 252 173", // #fffcad
		"--color-warning-400": "255 250 112", // #fffa70
		"--color-warning-500": "255 248 51", // #fff833
		"--color-warning-600": "230 223 46", // #e6df2e
		"--color-warning-700": "191 186 38", // #bfba26
		"--color-warning-800": "153 149 31", // #99951f
		"--color-warning-900": "125 122 25", // #7d7a19
		// error | #ff5c5c 
		"--color-error-50": "255 231 231", // #ffe7e7
		"--color-error-100": "255 222 222", // #ffdede
		"--color-error-200": "255 214 214", // #ffd6d6
		"--color-error-300": "255 190 190", // #ffbebe
		"--color-error-400": "255 141 141", // #ff8d8d
		"--color-error-500": "255 92 92", // #ff5c5c
		"--color-error-600": "230 83 83", // #e65353
		"--color-error-700": "191 69 69", // #bf4545
		"--color-error-800": "153 55 55", // #993737
		"--color-error-900": "125 45 45", // #7d2d2d
		// surface | #63bcfe 
		"--color-surface-50": "232 245 255", // #e8f5ff
		"--color-surface-100": "224 242 255", // #e0f2ff
		"--color-surface-200": "216 238 255", // #d8eeff
		"--color-surface-300": "193 228 255", // #c1e4ff
		"--color-surface-400": "146 208 254", // #92d0fe
		"--color-surface-500": "99 188 254", // #63bcfe
		"--color-surface-600": "89 169 229", // #59a9e5
		"--color-surface-700": "74 141 191", // #4a8dbf
		"--color-surface-800": "59 113 152", // #3b7198
		"--color-surface-900": "49 92 124", // #315c7c
		
	}
}