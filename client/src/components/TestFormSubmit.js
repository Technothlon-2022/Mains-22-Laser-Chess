const TestFormSubmit = () => {
    return ( 
        <div>
            <form action="http://localhost:3030/api/user/formsubmit" method="POST">
                <input type="text" id="roll" name="roll" placeholder="roll no" />
                <input type="text" id="pwd" name="pwd" placeholder="password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default TestFormSubmit;