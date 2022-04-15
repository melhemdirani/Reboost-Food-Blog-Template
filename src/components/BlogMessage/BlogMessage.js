import './BlogMessage.scss';

export default function BlogMessage() {
    return (
        <>
            <div className="Blog-Message-Container">
                <div className="message-inner-section">
                    <h3>Leave a reply</h3>
                    <form action="" class="form">
                        <div>
                            <div className="name-email">
                                <div className="name">
                                    <input type="text" name="name" id="name" placeholder="Name*" required />
                                </div>
                                <div className="email">
                                    <input type="email" name="email" id="email" placeholder="Email*" required />
                                </div>
                            </div>
                            <div className="website">
                                <input type="url" name="website" id="website" placeholder="Website" />
                            </div>
                            <div className="message">
                                <textarea name="message" id="" cols="20" rows="8"></textarea>
                            </div>
                            <div className="message-submit-button">
                                <button type="submit">Submit Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}