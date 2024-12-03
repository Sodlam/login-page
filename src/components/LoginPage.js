import Image from "next/image";
export default function LoginPage() {
    return (
        <div className="login">
      <Image
      className="img"
        src="/HONEY.png"
        alt="google-logo"
        width={100}
        height={100} />
            <form className="form">
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input placeholder="Enter email" type="email" />
                </div>
                <div className="input-container">
                    <input placeholder="Enter password" type="password" />
                </div>
                <button className="submit" type="submit">
                    Sign in
                </button>
                

                <p className="signup-link">
                    <a href="#">  Forget password? </a>
                </p>
            </form>
        </div>
    )
}