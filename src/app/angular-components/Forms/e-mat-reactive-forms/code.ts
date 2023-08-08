export const Code = {
    html: {
      content: `
      <form [formGroup]="basicDetailsForm" (ngSubmit)="onFormSubmitBasicDetails(basicDetailsForm.value)" *ngIf="isbasicDetailsForm">
            <table>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="FirstName" matInput placeholder="First Name *">
                            <mat-error>
                                    <span *ngIf="!basicDetailsForm.get('FirstName').valid && basicDetailsForm.get('FirstName').touched"> First Name Required</span>
                                </mat-error>
                        </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="LastName" matInput placeholder="Last Name">
                            <mat-error>
                                    <span *ngIf="!basicDetailsForm.get('LastName').valid && basicDetailsForm.get('LastName').touched">Last Name Required</span>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <mat-form-field class="demo-full-width">
                            <input formControlName="Email" matInput placeholder="Email *">
                            <mat-hint>use like : demo@demo.com</mat-hint>
                            <mat-error>
                                <span *ngIf="!basicDetailsForm.get('Email').valid && basicDetailsForm.get('Email').touched">Email Required</span>
                            </mat-error>
                        </mat-form-field>
                    </td>
                </tr>

                <tr>
                    <td colspan="2">
                        <mat-form-field class="demo-full-width">
                            <input formControlName="PhoneNumber" matInput placeholder="Phone Number *" (keypress)="numberOnly($event)">
                            <mat-error>
                                <span *ngIf="!basicDetailsForm.get('PhoneNumber').valid && basicDetailsForm.get('PhoneNumber').touched"> Phone Number Required</span>
                            </mat-error>
                        </mat-form-field>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span>Gender</span>
                        <br>
                        <br>
                        <mat-radio-group formControlName="Gender">
                            <mat-radio-button value="Male">Male &nbsp;</mat-radio-button>
                            <mat-radio-button value="Female">Female</mat-radio-button>
                        </mat-radio-group>
                        <mat-error>
                            <span *ngIf="!basicDetailsForm.get('Gender').valid && basicDetailsForm.get('Gender').touched">Gender Required</span>
                        </mat-error>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="content-center">
                        <button mat-raised-button color="accent" [disabled]="!basicDetailsForm.valid">Next</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        </form>

        <form [formGroup]="addressDetailsForm" (ngSubmit)="onFormSubmitAddressDetails(addressDetailsForm.value)" *ngIf="basicDetailsForm.valid && isaddressDetailsForm">
            <table>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <textarea formControlName="Address" matInput placeholder="Address *" matTextareaAutosize matAutosizeMinRows="2" matAutosizeMaxRows="5"></textarea>
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('Address').valid && addressDetailsForm.get('Address').touched"> Address Required</span>
                                    <p *ngIf="!addressDetailsForm.get('Address').valid && addressDetailsForm.get('Address').touched">Minimum 20 Charecters</p>
                                </mat-error>
                        </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="DoorNo" matInput placeholder="Enter your Door No. *">
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('DoorNo').valid && addressDetailsForm.get('DoorNo').touched"> Door no. Required</span>
                                </mat-error>
                        </mat-form-field>
                      
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="Street" matInput placeholder="Enter your Street *">
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('Street').valid && addressDetailsForm.get('Street').touched"> Street Required</span>
                                </mat-error>
                        </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="City" matInput placeholder="Enter your City *">
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('City').valid && addressDetailsForm.get('City').touched"> City Required</span>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <mat-select placeholder="Enter your State *" formControlName="State" name="State">
                                <mat-option *ngFor="let state of states" [value]="state">
                                  {{state}}
                                </mat-option>
                              </mat-select>
                        </mat-form-field>
                        <mat-error>
                            <span *ngIf="!addressDetailsForm.get('State').valid && addressDetailsForm.get('State').touched"> State Required</span>
                        </mat-error>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="PinCode" matInput placeholder="Enter your PinCode *">
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('PinCode').valid && addressDetailsForm.get('PinCode').touched"> PinCode Required</span>
                                    <p>Maximum 10 Charecters</p>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field>
                            <mat-select placeholder="Enter your Country *" formControlName="Country" name="country">
                              <mat-option *ngFor="let country of countries" [value]="country">
                                {{country}}
                              </mat-option>
                            </mat-select>
                            <mat-error>
                                    <span *ngIf="!addressDetailsForm.get('Country').valid && addressDetailsForm.get('Country').touched"> Country Required</span>
                                </mat-error>
                          </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="content-center">
                        <button mat-raised-button color="accent" [disabled]="!addressDetailsForm.valid">Next</button>
                    </td>
                </tr>
            </table>
        </form>
        <form [formGroup]="professionalDetailsForm" (ngSubmit)="onFormSubmitProfessionalDetails(professionalDetailsForm.value)" *ngIf="addressDetailsForm.valid && isprofessionalDetailsForm">
            <table>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="EmployeId" matInput placeholder="Enter your EmployeId *">
                            <mat-error>
                                    <span *ngIf="!professionalDetailsForm.get('EmployeId').valid && professionalDetailsForm.get('EmployeId').touched"> EmployeId Required</span>
                                </mat-error>
                        </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="Department" matInput placeholder="Enter your Department *">
                            <mat-error>
                                    <span *ngIf="!professionalDetailsForm.get('Department').valid && professionalDetailsForm.get('Department').touched"> Department Required</span>
                                </mat-error>
                        </mat-form-field>
                       
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="Role" matInput placeholder="Enter your Role *">
                            <mat-error>
                                    <span *ngIf="!professionalDetailsForm.get('Role').valid && professionalDetailsForm.get('Role').touched"> Role Required</span>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="password" type="password" matInput placeholder="Enter your password">
                            <mat-error>
                                    <span *ngIf="!professionalDetailsForm.get('password').valid && professionalDetailsForm.get('password').touched"> Passoword Required</span>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <mat-form-field class="demo-full-width">
                            <input formControlName="confirmPassword" type="password" matInput placeholder="Enter your confirmPassword">
                            <mat-error>
                                    <span *ngIf="!professionalDetailsForm.get('confirmPassword').valid && professionalDetailsForm.get('confirmPassword').touched">Passwords must match </span>
                                </mat-error>
                        </mat-form-field>
                        
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="content-center">
                        <button mat-raised-button color="accent" [disabled]="!professionalDetailsForm.valid">Next</button>
                    </td>
                </tr>
            </table>
        </form>
  `,
      language: 'html'
    },
    ts: {
      content: `
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-e-mat-reactive-forms',
  templateUrl: './e-mat-reactive-forms.component.html',
  styleUrls: ['./e-mat-reactive-forms.component.scss']
})
export class EMatReactiveFormsComponent implements OnInit {
  countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttaranchal",
    "Uttar Pradesh",
    "West Bengal"
]
_showName;
basicDetailsForm: FormGroup;
addressDetailsForm: FormGroup;
professionalDetailsForm: FormGroup;
isaddressDetailsForm: boolean = false;
isbasicDetailsForm: boolean = true;
isprofessionalDetailsForm: boolean = false;

constructor(private fb: FormBuilder, private eShareDataService : EShareDataService) {
    this.basicDetailsForm = fb.group({
        'FirstName': [null, Validators.required],
        'LastName': [null, Validators.required],
        'Email': [null, Validators.compose([Validators.required, Validators.email])],
        'PhoneNumber': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
        'Gender': [null, Validators.required],
    });
    this.addressDetailsForm = fb.group({
        'Address': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        'DoorNo': [null, Validators.required],
        'Street': [null, Validators.required],
        'City': [null, Validators.required],
        'State': [null, Validators.required],
        'PinCode': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{6}")])],
        'Country': [null, Validators.required],
    });
    this.professionalDetailsForm = fb.group({
        'EmployeId': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        'Department': [null, Validators.required],
        'Role': [null, Validators.required],
        'password': [null, Validators.required],
        'confirmPassword': [null, Validators.required],
    });

}
ngOnInit() {
}
onFormSubmitBasicDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = true;
    this.isprofessionalDetailsForm = false;
}
onFormSubmitAddressDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = false;
    this.isprofessionalDetailsForm = true;
}
onFormSubmitProfessionalDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = false;
}
numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
 }
}
`,
    language: 'javascript'
  },
    css: {
      content: `
    /** No CSS for this example */
          `,
      language: 'css'
    },
    bootstrapHtml:{
        content:`
        <!-- There is no HTML code for Bootstrap -->
        `,
        language: 'HTML'
      },
      bootstrapTS:{
        content:`
        /* There is no TS code for Bootstrap */
        `,
        language: 'TS'
      },
      bootstrapCSS:{
        content:`
        /* There is no CSS code for Bootstrap*/
        `,
        language: 'CSS'
      }
  }
